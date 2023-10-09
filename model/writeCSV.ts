import { createObjectCsvWriter as createCsvWriter } from 'csv-writer';
import { Data } from '../types/data.interface';

const writeCSV = async (filePath: string, data: Data[]): Promise<void> => {
  const csvWriter = createCsvWriter({
    path: filePath,
    header: [
      { id: 'title', title: 'title' },
      { id: 'value', title: 'value' },
      { id: 'weigth', title: 'weigth' },
      { id: 'amount', title: 'amount' },
    ],
    append: true,
  });

  return csvWriter.writeRecords(data);
};

export default writeCSV;
