export default function calFibo(n) {
  if (n === 0) return 0;
  if (n === 1) return 1;
  let result = 0;
  let f0 = 0;
  let f1 = 1;

  for (let i = 1; i < n; i++) {
    result = f0 + f1;
    f0 = f1;
    f1 = result;
  }
  return result;
}
