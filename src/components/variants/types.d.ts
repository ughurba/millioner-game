interface VariantProps {
  questionId: number;
  title: string;
  isCorrectAnswer: boolean;
  variant: string;
}
export interface CheckedVariantProps {
  pending: boolean;
  rejected: boolean;
  resolve: boolean;
}
