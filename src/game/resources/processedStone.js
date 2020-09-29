import { Resource } from 'manugo';

class ProcessedStone extends Resource {
  constructor(name) {
    super(name);
  }
}

export const processedStone = new ProcessedStone('Processed Stone').setIcon('mortar-pestle');
