import { useQuery } from "@tanstack/react-query";
import { getRecordList } from "@/api/record/recordListApi";
import type { RecordListResponse } from "./recordTypes";

export function useRecordList() {
  return useQuery<RecordListResponse>({
    queryKey: ["records"],
    queryFn: getRecordList,
  });
}
