function SpiceMustFlow(startingYield){
    final_result = 0
    days = 0
    while (startingYield >= 100){
        days += 1;
        startingYield -= 26;
        final_result += startingYield;
        startingYield += 26;
        startingYield -= 10
    }
    final_result -= 26
    if (final_result < 0){
        final_result = 0
    }
    console.log(days)
    console.log(final_result)
}

SpiceMustFlow(450)