for (i = 1; i <= 100; i++) {
    if(i % 10 == 0) {
        console.log("Multiplo de 10: ", i);
        continue
    }
    console.log(i);
}