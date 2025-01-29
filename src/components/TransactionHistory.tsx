'use client'

import React, { useState } from 'react';
import styled from 'styled-components';
import { ChartTypeSelect } from './ChartTypeSelect';

const Container = styled.div`
  padding: 20px;
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
`;

const Logo = styled.h1`
  font-family: var(--font-creepster), cursive;
  color: var(--primary-color);
  font-size: 2rem;
  margin: 0;
`;

const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 30px;
`;

const ConnectButton = styled.button`
  background-color: ${props => props.theme.colors.primary};
  color: white;
  border: none;
  padding: 10px 20px;
  border-radius: 5px;
  font-family: ${props => props.theme.fonts.gugi};
  cursor: pointer;
`;

const TabGroup = styled.div`
  display: flex;
  gap: 20px;
  margin-bottom: 20px;
`;

interface TabProps {
  active?: boolean;
  onClick?: () => void;
  children?: React.ReactNode;
}

const Tab = styled.div<TabProps>`
  font-family: var(--font-gugi);
  cursor: pointer;
  padding-bottom: 5px;
  border-bottom: 2px solid ${props => props.active ? '#000' : 'transparent'};
`;

const ChartWrapper = styled.div`
  position: relative;
  width: 100%;
  margin-bottom: 20px;
`;

const ChartContainer = styled.div`
  width: 100%;
  height: 400px;
  border: 1px solid #ccc;
  border-radius: 10px;
  padding: 20px;
`;

const ChartHeader = styled.div`
  position: absolute;
  top: 20px;
  right: 20px;
  z-index: 10;
`;

const ActionTabs = styled.div`
  display: flex;
  gap: 30px;
  margin-bottom: 20px;
`;

const Table = styled.table`
  width: 100%;
  font-family: var(--font-gugi);
  border-collapse: collapse;
  
  th {
    text-align: left;
    padding: 10px;
  }
`;

const TransactionHistory: React.FC = () => {
  const [selectedToken, setSelectedToken] = useState('SUI');
  const [selectedAction, setSelectedAction] = useState('Transfer');
  const [chartType, setChartType] = useState('line');

  return (
    <Container>
      <Header>
        <Logo>FLUXBALANCE</Logo>
        <ConnectButton>Connect Wallet</ConnectButton>
      </Header>

      <TabGroup>
        <Tab 
          active={selectedToken === 'SUI'} 
          onClick={() => setSelectedToken('SUI')}
          data-active={selectedToken === 'SUI'}
        >
          SUI
        </Tab>
        <Tab 
          active={selectedToken === 'USDC'} 
          onClick={() => setSelectedToken('USDC')}
          data-active={selectedToken === 'USDC'}
        >
          USDC
        </Tab>
      </TabGroup>

      <ChartWrapper>
        <ChartContainer>
          {/* 图表内容 */}
        </ChartContainer>
        <ChartHeader>
          <ChartTypeSelect 
            value={chartType}
            onChange={setChartType}
          />
        </ChartHeader>
      </ChartWrapper>

      <ActionTabs>
        <Tab 
          active={selectedAction === 'Transfer'} 
          onClick={() => setSelectedAction('Transfer')}
          data-active={selectedAction === 'Transfer'}
        >
          Transfer
        </Tab>
        <Tab 
          active={selectedAction === 'Contract Interactions'} 
          onClick={() => setSelectedAction('Contract Interactions')}
          data-active={selectedAction === 'Contract Interactions'}
        >
          Contract Interactions
        </Tab>
        <div style={{ marginLeft: 'auto' }}>Export CSV</div>
      </ActionTabs>

      <Table>
        <thead>
          <tr>
            {selectedAction === 'Transfer' ? (
              <>
                <th>Signature</th>
                <th>Amount</th>
                <th>From</th>
                <th>To</th>
                <th>Value</th>
                <th>Token</th>
              </>
            ) : (
              <>
                <th>Signature</th>
                <th>Contract</th>
                <th>Value</th>
                <th>Time</th>
              </>
            )}
          </tr>
        </thead>
        <tbody>
          {/* Table content will go here */}
        </tbody>
      </Table>
    </Container>
  );
};

export default TransactionHistory; 