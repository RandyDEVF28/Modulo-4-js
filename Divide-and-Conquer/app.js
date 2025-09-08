function findMax(arr) {
    if (arr.length === 1) return arr[0];

    const mid = Math.floor(arr.length / 2);

    const left = arr.slice(0, mid);
    const right = arr.slice(mid);

    const leftMax = findMax(left);
    const rightMax = findMax(right);

    return leftMax > rightMax ? leftMax : rightMax;
  }