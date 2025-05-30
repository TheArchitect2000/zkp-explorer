import React from "react";
import ResponsiveTable from "../Table";
import { formatDateTime } from "../../../utility/functions";
import "./style.scss";
import { useNavigate } from "react-router-dom";
import useFetchData from "../../../services/api/useFetchData";

function transformCommitmentToArray(commitments) {
  return commitments.map((commitment) => {
    const eventType = commitment.eventType || "";

    let isZKP = false;
    let isDevice = false;
    let isTransaction = false;
    let isCommitment = false;

    if (String(eventType) === "ZKPStored") {
      isZKP = true;
    } else if (
      String(eventType) === "DeviceCreated" ||
      String(eventType) === "DeviceRemoved"
    ) {
      isDevice = true;
    } else if (String(eventType) === "Transaction") {
      isTransaction = true;
    } else if (String(eventType) === "CommitmentStored") {
      isCommitment = true;
    }
    return [
      commitment?.deviceType || "",
      commitment?.commitmentId || "",
      formatDateTime(new Date(commitment?.timestamp * 1000)) || "",
      commitment?.nodeId || "",
      commitment?.transactionHash || "",
      commitment?.manufacturer || "",
      commitment?.deviceModel || "",
      commitment?.softwareVersion || "",
      [
        isZKP && !isDevice && "IoT Data & ZKP",
        /* isZKP && "ZKP",
        (isTransaction || isZKP) && "Transaction Details", */
        !isZKP &&
          !isDevice &&
          !isTransaction &&
          !isCommitment &&
          "Service Details",
        !isZKP && isDevice && "Device Details",
        isZKP && "Verify Proof",
        /* isCommitment && "Commitment Data", */
      ].filter(Boolean),
    ];
  });
}

export default function CommitmentTable({ data, ...props }) {
  const navigateTo = useNavigate();
  const { fetchData, loading } = useFetchData();

  async function handleCellClick(row, col, item, fullRowData) {
    if (col === 4 /* && fullRowData[4].props.children === 'Transaction' */) {
      const encodedHash = encodeURIComponent(item);
      navigateTo(`/tx/${encodedHash}`);
    }  else if (col === 1) {
      if (loading) {
        console.log("Wait");
        return false;
      }
      const res = await fetchData(
        `contract/search-data?search=${encodeURIComponent(
          item
        )}&page=${1}&limit=${10}`
      );
      res.data.data.forEach((item) => {
        if (item.commitment && item.commitmentId) {
          navigateTo(`/tx/${item.transactionHash}`);
        }
      });
    }
  }
  return (
    <ResponsiveTable
      morePadding={true}
      conditionalOverrides={[
        {
          rowExist: true,
          columnToApplyClass: 4,
          className: "transaction-hash-label",
        },
        {
          rowExist: true,
          columnToApplyClass: 1,
          className: "transaction-hash-label",
        },
      ]}
      onCellClick={handleCellClick}
      titles={[
        "Device Type",
        "Commitment Id",
        "Submission Timestamp",
        "Node Id",
        "Transaction Id",
        "Manufacturer",
        "Device Model",
        "Software Version",
      ]}
      pagination={false}
      data={[...transformCommitmentToArray(data)]}
      itemsPerPage={10}
      {...props}
    />
  );
}
