// https://github.com/alibaba/flutter-go/tree/master/lib/components/flutter_markdown
let audio = 'https://fanyi.baidu.com/gettts?lan=en&text=${api}&spd=3&source=web',
const data = [{
  name: 'closed',
  details: {
		title: '判断弹出窗口是否关闭,关闭为true,未关闭为false',
		code: `
			const popupWindow = window.open("popup.html","dataWindow")
			popupWindow.closed   // 如果此弹出页面没关 值为false
		`
	}
}, {
	name: 'devicePixelRatio',
  details: {
		title: '此属性返回当前显示设备的物理像素分辨率与CSS像素分辨率的比值',
		code: `
			var value = window.devicePixelRatio
		`,
		details: '该值也可以被解释为像素大小的比例：即一个CSS像素的大小相对于一个物理像素的大小的比值.这个值的改变不会触发任何回调函数或者被其他事件监听（例如，如果你拖动窗口使其在不同屏幕密度的显示器上显示'
	}
}, {
	name: 'frameElement',
  details: {
		title: '返回嵌入当前window对象的元素(比如 <iframe> 或者 <object>),如果当前window对象已经是顶层窗口,则返回null.',
		code: `
			var frameEl = window.frameElement
		`,
	}
}, {
	name: 'frames',
  details: {
		title: '返回当前窗口，一个类数组对象，列出了当前窗口的所有直接子窗口',
		code: `
			var frameList = window.frames
		`,
	}
}, {
	name: 'fullScreen',
  details: {
		title: '这个属性表明了窗口是否处于全屏模式下。仅在Gecko 1.9（Firefox 3）以及之后的版本中有意义',
		code: `
			var isInFullScreen = windowRef.fullScreen // 全屏下是true,否则false
		`,
		details: '在取得chrome privileges的情况下，这个属性是可读写的，否则将是只读属性'
	}
}, {
	name: 'history',
  details: {
		title: '获取History 对象的引用，History 对象提供了操作浏览器会话历史的接口',
	}
}]