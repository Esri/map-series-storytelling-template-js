﻿define(
	 ({
		viewer: {
			common: {
				close: "关闭"
			},
			loading: {
				long: "故事正在初始化",
				long2: "谢谢等候",
				failButton: "重新加载故事"
			},
			signin: {
				title: "需要进行身份验证",
				explainViewer: "请登录在 %PORTAL_LINK% 上的账户，以便访问此故事。",
				explainBuilder: "请登录在 %PORTAL_LINK% 上的账户，以便配置此故事。"
			},
			errors: {
				boxTitle: "发生错误",
				invalidConfig: "配置无效",
				invalidConfigNoApp: "未在 index.html 中指定 Web 制图应用程序标识符。",
				unspecifiedConfigOwner: "尚未配置授权的所有者。",
				invalidConfigOwner: "未授权故事所有者。",
				createMap: "无法创建地图",
				invalidApp: "%TPL_NAME% 不存在或不可访问。",
				appLoadingFail: "发生了一些错误， %TPL_NAME% 未正确加载。",
				notConfiguredDesktop: "尚未配置此故事。",
				notConfiguredMobile: "此显示器大小不支持 %TPL_NAME% 构建器。",
				notAuthorized: "您无权访问此故事",
				noBuilderIE: "低于版本 %VERSION% 的 Internet Explorer 不支持构建器。%UPGRADE%",
				noViewerIE: "低于版本 %VERSION%. %UPGRADE% 的 Internet Explorer 不支持此故事。",
				upgradeBrowser: "<a href='http://browsehappy.com/' target='_blank'>请更新您的浏览器</a>。",
				mapLoadingFail: "发生了一些错误，地图未正确加载。",
				signOut: "登出"
			},
			mobileInfo: {
				legend: "图例",
				description: "描述",
				lblLegendMobileError: "抱歉，图例不可用。请重新加载故事。",
				lblLegendMobileErrorExplain: "如果设备在加载故事后旋转到纵向模式，则图例不可用。"
			},
			mobileFooter: {
				swipeInvite: "滑动浏览故事",
				lblNext: "下一页",
				lblEnd: "您已到达故事末尾"
			},
			headerFromCommon: {
				storymapsText: "故事地图",
				builderButton: "编辑",
				facebookTooltip: "共享至 Facebook",
				twitterTooltip: "共享至 Twitter",
				bitlyTooltip: "获取短链接",
				templateTitle: "设置模板标题",
				templateSubtitle: "设置模板子标题",
				share: "共享",
				checking: "正在检查您的故事内容",
				fix: "修复在您故事中的问题",
				noerrors: "未检测到问题"
			},
			overviewFromCommon: {
				title: "总览图"
			},
			legendFromCommon: {
				title: "图例"
			},
			shareFromCommon: {
				copy: "复制",
				copied: "已复制",
				open: "打开",
				embed: "嵌入到网页",
				embedExplain: "使用以下 HTML 代码将故事嵌入到 Web 页面中。",
				size: "大小(宽度/高度):"
			},
			locatorFromCommon: {
				error: "位置不可用"
			}
        }
    })
);