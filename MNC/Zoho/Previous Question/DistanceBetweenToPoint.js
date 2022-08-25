//https://practice.geeksforgeeks.org/problems/distance-between-2-points3200/1

const distance = (x1, y1, x2, y2) => {
  let a = x2 - x1;
  let b = y2 - y1;
  let ans = Math.round(Math.sqrt(a * a + b * b));
  console.log(ans)
};

distance(0, 0, 2, -2);
distance(-20, 23, -15, 68)
