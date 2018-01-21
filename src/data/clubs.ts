export interface Club {
  code: string;
  url: string;
  name?: string;
}

const clubs: Club[] = [
  { url: 'http://www.afc.com.au/', code: 'adel' },
  { url: 'http://www.lions.com.au/', code: 'bl' },
  { url: 'http://www.carltonfc.com.au/', code: 'carl' },
  { url: 'http://www.collingwoodfc.com.au/', code: 'coll', name: 'Collingood' },
  { url: '', code: 'fre' },
  { url: '', code: 'gcfc' },
  { url: '', code: 'geel', name: 'Geelong Cats' },
  { url: '', code: 'gws' },
  { url: '', code: 'haw' },
  { url: '', code: 'melb' },
  { url: '', code: 'nmfc' },
  { url: '', code: 'port', name: 'Port Adelaide' },
  { url: '', code: 'rich' },
  { url: '', code: 'stk' },
  { url: '', code: 'syd', name: 'Sydney Swans' },
  { url: '', code: 'wb', name: 'Western Bulldogs' },
  { url: '', code: 'wce' },
  { url: '', code: 'ess' }
];

export default clubs;
