const menu = [
    {
        id: 1,
        title: "Coffee",
        Category: "Breakfast",
        price: 8500,
        img: "../../../Downloads/remedies.jpg",
        description: "A whole bunch of sugary sweetness guaranteed to make you go oooooohhhh weeee. glazed with a whole lotta love and dramatic spice ;)"
    },
    {
        id: 2,
        title: "Bread",
        Category: "Breakfast",
        price: 8500,
        img: "../../../Downloads/remedies.jpg",
        description: "A whole bunch of sugary sweetness guaranteed to make you go oooooohhhh weeee. glazed with a whole lotta love and dramatic spice ;)"
    },
    {
        id: 3,
        title: "Chicken",
        Category: "Lunch",
        price: 8500,
        img: "../../../Downloads/remedies.jpg",
        description: "A whole bunch of sugary sweetness guaranteed to make you go oooooohhhh weeee. glazed with a whole lotta love and dramatic spice ;)"
    },
    {
        id: 4,
        title: "Rice",
        Category: "Lunch",
        price: 8500,
        img: "../../../Downloads/remedies.jpg",
        description: "A whole bunch of sugary sweetness guaranteed to make you go oooooohhhh weeee. glazed with a whole lotta love and dramatic spice ;)"
    },
    {
        id: 5,
        title: "Fries",
        Category: "Lunch",
        price: 8500,
        img: "../../../Downloads/remedies.jpg",
        description: "A whole bunch of sugary sweetness guaranteed to make you go oooooohhhh weeee. glazed with a whole lotta love and dramatic spice ;)"
    },
    {
        id: 6,
        title: "Pork chops",
        Category: "Lunch",
        price: 8500,
        img: "../../../Downloads/remedies.jpg",
        description: "A whole bunch of sugary sweetness guaranteed to make you go oooooohhhh weeee. glazed with a whole lotta love and dramatic spice ;)"
    },
    {
        id: 7,
        title: "Pork ribs",
        Category: "Lunch",
        price: 8500,
        img: "../../../Downloads/remedies.jpg",
        description: "A whole bunch of sugary sweetness guaranteed to make you go oooooohhhh weeee. glazed with a whole lotta love and dramatic spice ;)"
    },
    {
        id: 8,
        title: "Steak dinner",
        Category: "Dinner",
        price: 8500,
        img: "../../../Downloads/remedies.jpg",
        description: "A whole bunch of sugary sweetness guaranteed to make you go oooooohhhh weeee. glazed with a whole lotta love and dramatic spice ;)"
    }
];

const sectionCenter = document.querySelector('.section-center');
const buttonContainer = document.querySelector('.btn-container');
window.addEventListener('DOMContentLoaded', function(){
    displayMenuItems(menu);
    // displayButtons(buttons);
    const cats = menu.reduce(
        function(values, cat){
            if (!values.includes(cat.Category)) {
                values.push(cat.Category);
            }
            return values

    },['All']
    );
    const displayButtons = cats.map(function(db){
        return (
            `
            <button class="filter-btn" type="button" data-category=${db}>
            ${db}
            </button>`
        );

    }).join("");
    buttonContainer.innerHTML = displayButtons;

    const filterBtns = document.querySelectorAll('.filter-btn');
    filterBtns.forEach(function(btn){
        btn.addEventListener('click', function(e){
            const category = e.currentTarget.dataset.category;
    
            const menuCategory = menu.filter(function(menuItem) {
                if(menuItem.Category === category){
                    return menuItem;
                }
            });
    
            if(category === 'All'){
                displayMenuItems(menu);
            }
            else{
                displayMenuItems(menuCategory);
            }
            // console.log(menuCategory);
        })
    })
    

    });
    // let displayButtons = bt.join("");
    // filterBtns.innerHTML = displayButtons;
//     console.log(cat);
// });


function displayMenuItems(menuItems){
    // console.log("shake and bake")
    let menuDisplay = menuItems.map(function(item){
        // console.log(item);

        return(
        `<article class="menu-item">
        <img src=${item.img} alt=${item.title} class="photo" />
        <div class="item-info">
            <header>
                <h4>${item.title}</h4>
                <h4 class="price">${item.price}</h4>
        
            </header>
            <p class="item-text">${item.description}
            </p>
        </div>
    </article>
    `);
    });
    menuDisplay = menuDisplay.join("");
    sectionCenter.innerHTML = menuDisplay;
    // console.log(menuDisplay);
}