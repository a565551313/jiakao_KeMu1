import { createServerFn } from "@tanstack/react-start";
import { getMxnzpExamQuestions } from "@/lib/mxnzp.server";
import type { VehicleType } from "@/lib/exam-types";

export const getExamQuestions = createServerFn({ method: "GET" })
  .inputValidator((data: { vehicleType: VehicleType }) => data)
  .handler(async ({ data }) => {
    return getMxnzpExamQuestions(data.vehicleType);
  });
