import { ExampleFile, FileType } from '../../../../shared/models';

export const paginationUsage: ExampleFile[] = [
  {
    type: FileType.TS,
    name: 'pagination-usage.module.ts',
    content: require('!!raw-loader?lang=typescript!./example/pagination-usage/pagination-usage.module.md')
  },
  {
    type: FileType.TS,
    name: 'pagination-usage.component.ts',
    content: require('!!raw-loader?lang=typescript!./example/pagination-usage/pagination-usage.component.ts')
  },
  {
    type: FileType.HTML,
    name: 'pagination-usage.component.html',
    content: require('!!raw-loader?lang=html!./example/pagination-usage/pagination-usage.component.html')
  },
  // {
  //   type: FileType.JSON,
  //   name: 'sample-data.json',
  //   content: require('!!raw-loader?lang=json!../../../../shared/data/sample-data.json')
  // }
];

