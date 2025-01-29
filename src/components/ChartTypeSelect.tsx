'use client'

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import styled from 'styled-components'

const StyledSelectTrigger = styled(SelectTrigger)`
  background: white;
  border: 1px solid #e2e8f0;
  border-radius: 4px;
  padding: 4px 12px;
  min-width: 120px;
  height: 32px;
  display: inline-flex;
  align-items: center;
  justify-content: space-between;
  font-size: 14px;
  cursor: pointer;
  box-shadow: 0 1px 2px rgba(0, 0, 0, 0.05);

  &:hover {
    border-color: #cbd5e0;
  }

  &:focus {
    outline: none;
    border-color: #8247E5;
    box-shadow: 0 0 0 1px #8247E5;
  }
`;

const StyledSelectContent = styled(SelectContent)`
  background: white;
  border-radius: 4px;
  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);
  margin-top: 4px;
  overflow: hidden;
`;

const StyledSelectItem = styled(SelectItem)`
  padding: 8px 12px;
  cursor: pointer;
  font-size: 14px;

  &:hover {
    background: #f7fafc;
  }

  &[data-state="checked"] {
    background: #f7fafc;
    font-weight: 500;
  }
`;

interface ChartTypeSelectProps {
  onChange?: (value: string) => void;
  value?: string;
}

export function ChartTypeSelect({ onChange, value = 'line' }: ChartTypeSelectProps) {
  return (
    <Select defaultValue={value} onValueChange={onChange}>
      <StyledSelectTrigger>
        <SelectValue placeholder="Chart type" />
      </StyledSelectTrigger>
      <StyledSelectContent>
        <StyledSelectItem value="line">Line Chart</StyledSelectItem>
        <StyledSelectItem value="bar">Bar Chart</StyledSelectItem>
      </StyledSelectContent>
    </Select>
  )
} 