for (let i = -5; i <= 20; i++) {
    if (i === -2 || i === 5 || i === 17) {
        continue;
    }
    console.log(i);
}

for (let i = -5; i <= 20; i++) {
    if (i === -2) {
        continue;
    } else if (i === 5) {
        continue;
    } else if (i === 17) {
        continue;
    }
    console.log(i);
}


for (let number = -5; number <= 20; number++) {
    switch (number) {
        case 0:
            console.log('red');
            break;
        case 3:
            console.log('yellow');
            break;
        case 15:
            console.log('green');
            break;
        default:
            console.log(`The number is ${number}`)
    }
}

//////////////////////////////////////////////////

for ( let i = -5; i <= 20; i++ ){
    if (i === -2) {continue;
    } else if (i === 5) {
        continue;
    } else if (i === 17) continue;
    console.log(i)
}

for ( let i = -5; i <= 20; i++ ){
    if (i === 0) {
        console.log('red')
    } else if (i === 3) {
        console.log('yellow')
    } else if (i === 15) {
        console.log('green')
    } else {
        console.log(`The number is ${i}`)
    }

}

for (let i = -5; i <= 20; i++) {
    if (i === -2) {
        console.log('red');
        continue;
    } else if (i === 5) {
        console.log("yellow");
        continue;
    } else if (i === 17) {
        console.log ('green');
        continue;
    }
    console.log(`The number is ${i}`);
}
