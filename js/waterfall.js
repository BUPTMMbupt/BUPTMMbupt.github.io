/* jshint asi:true */
//先等图片都加载完成
//再执行布局函数

/**
 * 执行主函数
 * @param  {[type]} function( [description]
 * @return {[type]}           [description]
 */
(function() {

  /**
     * 内容JSON
     */
  var demoContent1= [
    {
      demo_link: '../infor/2014/08/15/still-in-germany.html',
      img_link: 'https://c1.staticflickr.com/5/4205/35541174766_62ff13fc89_z.jpg',
      title: 'Doctor:Zheng Zhang',
      core_tech: 'DeepLearing',
      description: '博士。巴拉巴拉巴拉。详情 <a href ="../infor/2014/08/15/still-in-germany.html/">这里</a>。'
    }
  ]
  var demoContent = [
    {
      demo_link: '../infor/2017/07/01/liuwu.html',
      img_link: '/images/liuwu.jpg',

      title: 'Tutor: 刘武',
      core_tech: 'Multimedia,Computer Vision',
      description: '详情 <a href ="../infor/2017/07/01/liuwu.html">点击</a>'
     }, 
     {
      demo_link: '../infor/2017/07/01/liuxinchen.html',
      img_link: '/images/liuxinchen.jpg',

      title: 'Doctor:刘鑫辰',
      core_tech: 'Multimedia,Computer Vision',
      description: ' <a href ="../infor/2017/07/01/liuxinchen.html">点击</a>'
    }, {
      demo_link: '../infor/2017/07/01/lishuanqun.html',
      img_link: '/images/lilaoshi.jpg',

      title: 'Doctor:李双群',
      core_tech: 'Multimedia,Computer Vision',
      description:  ' <a href ="../infor/2017/07/01/lishuanqun.html">点击</a>'
    }
  ];
  
  contentInit(demoContent) //内容初始化
  waitImgsLoad() //等待图片加载，并执行布局初始化
/*   contentInit(demoContent1) //内容初始化
  waitImgsLoad() //等待图片加载，并执行布局初始化 */
}());

/**
 * 内容初始化
 * @return {[type]} [description]
 */
function contentInit(content) {
  // var htmlArr = [];
  // for (var i = 0; i < content.length; i++) {
  //     htmlArr.push('<div class="grid-item">')
  //     htmlArr.push('<a class="a-img" href="'+content[i].demo_link+'">')
  //     htmlArr.push('<img src="'+content[i].img_link+'">')
  //     htmlArr.push('</a>')
  //     htmlArr.push('<h3 class="demo-title">')
  //     htmlArr.push('<a href="'+content[i].demo_link+'">'+content[i].title+'</a>')
  //     htmlArr.push('</h3>')
  //     htmlArr.push('<p>主要技术：'+content[i].core_tech+'</p>')
  //     htmlArr.push('<p>'+content[i].description)
  //     htmlArr.push('<a href="'+content[i].code_link+'">源代码 <i class="fa fa-code" aria-hidden="true"></i></a>')
  //     htmlArr.push('</p>')
  //     htmlArr.push('</div>')
  // }
  // var htmlStr = htmlArr.join('')
  var htmlStr = ''
  for (var i = 0; i < content.length; i++) {
	if(i==1){
		htmlStr += '<div class="grid-item">' + '   <a class="a-img" href="' + content[i].demo_link + '">' 
	+ '       <img src="' + content[i].img_link + '">' + '   </a>' + '   <h3 class="demo-tutor">' 
	+ '       <b href="' + content[i].demo_link + '">' + content[i].title + '</b>' + '   </h3>' 
	+ '   <p class="demo-direction">研究方向：' + content[i].core_tech + '</p>' + '   <p>个人简介：' 
	+ content[i].description 	+ '   </p>' + '</div>'
	}
	else{
		htmlStr += '<div class="grid-item">' + '   <a class="a-img" href="' + content[i].demo_link + '">' 
	+ '       <img src="' + content[i].img_link + '">' + '   </a>' + '   <h3 class="demo-title">' 
	+ '       <a href="' + content[i].demo_link + '">' + content[i].title + '</a>' + '   </h3>' 
	+ '   <p class="demo-direction">研究方向：' + content[i].core_tech + '</p>' + '   <p>个人简介：' 
	+ content[i].description 	+ '   </p>' + '</div>'
	}
    
  }

  var grid = document.querySelector('.grid')
  grid.insertAdjacentHTML('afterbegin', htmlStr)
}

/**
 * 等待图片加载
 * @return {[type]} [description]
 */
function waitImgsLoad() {
  var imgs = document.querySelectorAll('.grid img')
  var totalImgs = imgs.length
  var count = 0
  //console.log(imgs)
  for (var i = 0; i < totalImgs; i++) {
    if (imgs[i].complete) {
      //console.log('complete');
      count++
    } else {
      imgs[i].onload = function() {
        // alert('onload')
        count++
        //console.log('onload' + count)
        if (count == totalImgs) {
          //console.log('onload---bbbbbbbb')
          initGrid()
        }
      }
    }
  }
  if (count == totalImgs) {
    //console.log('---bbbbbbbb')
    initGrid()
  }
}

/**
 * 初始化栅格布局
 * @return {[type]} [description]
 */
function initGrid() {
  var msnry = new Masonry('.grid', {
    // options
    itemSelector: '.grid-item',
    columnWidth: 300,
    isFitWidth: true,
    gutter: 20
  })
}
