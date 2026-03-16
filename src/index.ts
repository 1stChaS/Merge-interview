import { merge } from './merger';

console.log('=== Merge Arrays Demo ===\n');

const example1 = merge([1, 5, 9], [2, 6, 10], [8, 4]);
console.log('Example 1:');
console.log('  Col1 (asc):  [1, 5, 9]');
console.log('  Col2 (asc):  [2, 6, 10]');
console.log('  Col3 (desc): [8, 4]');
console.log(`  Result:      [${example1}]\n`);

const example2 = merge([-5, -1, 3], [-3, 0, 2], [4, 1, -2]);
console.log('Example 2 (with negatives):');
console.log('  Col1 (asc):  [-5, -1, 3]');
console.log('  Col2 (asc):  [-3, 0, 2]');
console.log('  Col3 (desc): [4, 1, -2]');
console.log(`  Result:      [${example2}]\n`);

const example3 = merge([1, 3, 5], [1, 3, 5], [5, 3, 1]);
console.log('Example 3 (with duplicates):');
console.log('  Col1 (asc):  [1, 3, 5]');
console.log('  Col2 (asc):  [1, 3, 5]');
console.log('  Col3 (desc): [5, 3, 1]');
console.log(`  Result:      [${example3}]\n`);
