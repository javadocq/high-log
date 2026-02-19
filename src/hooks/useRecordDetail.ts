import { useState, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import { useDeleteRecord } from "@/api/record/useRecordDetailApi";
import type { RecordDetail } from "@/api/record/recordTypes";

export function useRecordDetail(initialRecord: RecordDetail) {
  const navigate = useNavigate();
  const recordId = initialRecord.id;

  const { mutate: deleteRecordMutation } = useDeleteRecord();

  const [text, setText] = useState<string>(initialRecord.title);
  const [isChecked, setIsChecked] = useState<boolean>(true);
  const [fileStatus, setFileStatus] = useState<
    "idle" | "completed" | "disabled"
  >(initialRecord.status === "READY" ? "completed" : "idle");
  const [uploadedFileName, setUploadedFileName] =
    useState<string>("한양대 면접용.pdf");

  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const [isToastOpen, setIsToastOpen] = useState<boolean>(false);
  const [toastMessage, setToastMessage] = useState<string>("");

  const handleSave = useCallback(() => {
    console.log("Saving:", { text, isChecked, uploadedFileName });
    setToastMessage("변경 내용이 저장되었습니다");
    setIsToastOpen(true);
    setTimeout(() => setIsToastOpen(false), 3000);
  }, [text, isChecked, uploadedFileName]);

  const handleFileRemove = useCallback(() => {
    if (initialRecord) {
      console.log("Removing file for record:", initialRecord.id);
    }
    setUploadedFileName("");
    setFileStatus("idle");
  }, [initialRecord]);

  const handleDeleteClick = useCallback(() => {
    setIsModalOpen(true);
  }, []);

  const handleDeleteConfirm = useCallback(() => {
    if (recordId) {
      deleteRecordMutation(recordId, {
        onSuccess: () => {
          setIsModalOpen(false);
          setToastMessage("삭제가 완료되었습니다");
          setIsToastOpen(true);
          setTimeout(() => {
            setIsToastOpen(false);
            navigate("/record_management");
          }, 1500);
        },
        onError: (error) => {
          setIsModalOpen(false);
          setToastMessage(`삭제 실패: ${error.message}`);
          setIsToastOpen(true);
          setTimeout(() => setIsToastOpen(false), 3000);
        },
      });
    }
  }, [recordId, deleteRecordMutation, navigate]);

  const handleModalClose = useCallback(() => {
    setIsModalOpen(false);
  }, []);

  const handleToastClose = useCallback(() => {
    setIsToastOpen(false);
  }, []);

  return {
    initialRecord,
    text,
    setText,
    isChecked,
    setIsChecked,
    fileStatus,
    uploadedFileName,
    isModalOpen,
    isToastOpen,
    toastMessage,
    handleSave,
    handleFileRemove,
    handleDeleteClick,
    handleDeleteConfirm,
    handleModalClose,
    handleToastClose,
    navigate,
  };
}
