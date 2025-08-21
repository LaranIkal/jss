function factorial(n) {
    if (n === 0 || n === 1) {
        return 1;
    }
    return n * factorial(n - 1);
}

print("Factorial of 5 using tail recursion:" + factorial(5) + "\n");
