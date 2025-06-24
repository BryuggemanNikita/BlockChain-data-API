interface BlockId {
  hash: string;
  parts: {
    total: number;
    hash: string;
  };
}

interface BlockHeader {
  version: object; 
  chain_id: string;
  height: string; 
  time: string; 
  last_block_id: object;
  last_commit_hash: string;
  data_hash: string;
  validators_hash: string;
  next_validators_hash: string;
  consensus_hash: string;
  app_hash: string;
  last_results_hash: string;
  evidence_hash: string;
  proposer_address: string;
}

interface BlockData {
  txs: string[];
}

interface BlockLastCommit {
  height: string;
  round: number;
  block_id: object;
  signatures: object[];
}

interface Block {
  header: BlockHeader;
  data: BlockData;
  evidence: object[];
  last_commit: BlockLastCommit;
}

export interface IBlockDataFromCosmos {
  block_id: BlockId;
  block: Block;
  message?: string
}