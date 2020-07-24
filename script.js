const header = document.querySelector('.tabs')
const tabsItem = document.querySelectorAll('.tabs__item')

const content = document.querySelectorAll('.content__item')

// 1 способ


// function hideContentTab() {

//   content.forEach(item => {
//     item.style.display = 'none'
//   })

//   tabsItem.forEach(item => {
//     item.classList.remove('active-tab')
//   })
// }

// function showContentTab(i = 0) {
//   content[i].style.display = 'block'
//   tabsItem[i].classList.add('active-tab')
// }

// header.addEventListener('click', (event) => {

//   const target = event.target

//   if (target && target.classList.contains('tabs__item') || 
//   target.parentNode.classList.contains('tabs__item')) {

//     tabsItem.forEach((item, i) => {
//       if (target == item || target.parentNode == item) {
//         hideContentTab()
//         showContentTab(i)
//       }
//     })

//   }

// })

// hideContentTab()
// showContentTab()



//  2 cпособ

function selectTab(params) {
  
  tabsItem.forEach(item => {
    item.classList.remove('active-tab')
  })
  this.classList.add('active-tab')

  let tabName = this.getAttribute('data-tab')
  selectTabContent(tabName)
}


function selectTabContent(tabName) {
  content.forEach(item => {
    item.classList.contains(tabName) ? item.classList.add('active') : item.classList.remove('active')
  })
}


tabsItem.forEach(item => {
  item.addEventListener('click', selectTab)
})