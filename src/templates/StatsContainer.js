const StatsContainer = (stat) => {

    /* 
    Create a div container for all the bars, some will have a
    filled background based on the stat.value attribute.
    Then add the bar container to the main template.
    */
    let barContainer = `<div class="flex w-full justify-center sm:justify-start mt-1 py-2">`

    for (let i = 1; i <= 10; i++) {
        if (i <= stat.value) {
            barContainer += `<div class="w-8 h-2 mx-px border-2 border-white rounded-lg bg-white"></div>`
        } else {
            barContainer += `<div class="w-8 h-2 mx-px border-2 border-white rounded-lg"></div>`
        }
    }

    barContainer +=  `</div>`

    // Main container template
    let template =
        /*html*/
        `
        <div class="my-4" id=barContainer>
            <span class="font-bold">${stat.trait_type}: </span>
            <span class="font-thin">${stat.value} / 10</span>
            <!-- Placeholder to add bars-->
            ${barContainer}
    `

    template += `</div>`

    return template
}

export default StatsContainer

