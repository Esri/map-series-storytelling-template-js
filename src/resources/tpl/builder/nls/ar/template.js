﻿define(
	 ({
		builder: {
			layouts: {
				tabTitle: "مُبوب",
				tabDescr: "عرض الخرائط والمحتوى الآخر باستخدام علامات التبويب مع لوحة اختيارية لنص وصفي.",
				tabItem: "علامة تبويب",
				tabItems: "علامات تبويب",
				sideTitle: "أكورديون جانبي",
				sideDescr: "عرض الخرائط والمحتوى الآخر باستخدام عناصر تحكم قابلة للتوسع تشمل نصًا وصفيًا.",
				sideItem: "إدخال",
				sideItems: "إدخالات",
				bulletTitle: "تعداد نقطي",
				bulletDescr: "عرض الخرائط والمحتوى الآخر باستخدام علامات التعداد النقطي مع خيار لوحة اختيارية لنص وصفي.",
				bulletItem: "رمز نقطي",
				bulletItems: "رموز نقطية"
			},
			common: {
				lblStatus1: "تم النشر",
				lblStatus3: "مَخفِي"
			},
			settingsLayoutOptions: {
				title: "خيارات التخطيط",
				lblDescription: "الوصف",
				lblLegend: "موضع وسيلة الإيضاح",
				tooltipLegend: "اختر مكان عرض وسيلة إيضاح الخريطة. يمكنك تشغيل وسيلة الإيضاح لأي خريطة عند إضافتها أو تكوينها.",
				lblDropdown: "منسدل",
				lblBelowDesc: "أدنى الوصف",
				lblOnPanel: "في شكل لوحة",
				lblPanelDescAndLegend: "لوحة الوصف ووسيلة الإيضاح",
				lblPanelDescAndOrLegend: "لوحة الوصف و/أو وسيلة الإيضاح",
				lblPanelDesc: "لوحة الوصف",
				lblPanelLegend: "لوحة وسيلة الإيضاح",
				lblPanelAccordion: "لوحة أكورديون",
				cfgLeft: "يسار",
				cfgRight: "يمين",
				cfgSmall: "صغير",
				cfgMedium: "متوسط",
				cfgLarge: "كبير",
				lblNumbering: "عرض الأرقام",
				lblReverse: "عكس الترقيم",
				canOverlapMap: "يمكن تراكب موقع الخريطة"
			},
			settingsMapOptions: {
				title: "خيارات الخريطة",
				lblOverview: "خريطة النظرة العامة",
				tooltipOverview: "عرض خريطة نظرة عامة صغيرة مصحوبة بالخريطة الرئيسية.",
				lblLocate: "زر تحديد المواقع",
				tooltipLocate: "هذه الوظيفة مدعومة في معظم الأجهزة الجوالة ومستعرضات سطح المكتب (Internet Explorer 9).",
				lblGeocoder: "الباحث عن العنوان أو المكان",
				tooltipGeocoder: "السماح للمستخدمين بالعثور على العناوين والأماكن على الخريطة.",
				lblSync: "تزامن مواقع الخريطة",
				tooltipSync: "عند التمكين، سيتم تطبيق الموقع الأوّلي للخريطة الأولى في سلسلتك على كل الخرائط، وسيتم عكس انتقال المستخدمين في أي خريطة في كل الخرائط. قم بتعطيل موقع كل خريطة ليظل مستقلاً."
			},
			initPopup: {
				title: "مرحبًا بك في"
			},
			addEditPopup: {
				lblAdd: "إضافة",
				lblEdit: "تحرير",
				disabled: "تم تعطيل الإضافة للوصول إلى أقصى عدد مسموح به من %LBL_LAYOUT%.",
				titleAdd: "إضافة",
				titleEdit: "تحرير",
				stepMainStageNextTooltip: "أدخل عنوان ومحتوى %LBL_LAYOUT%",
				titlePlaceholder: "عنوان %LBL_LAYOUT%..."
			},
			textEditor: {
				placeholder1: "إضافة النص والروابط والرسومات الصغيرة هنا.",
				placeholder2: "عند اختفاء الجانب الأيسر الفارغ من اللوحة."
			},
			organizePopup: {
				title: "تنظيم",
				lblHeader: "اسحب %LBL_LAYOUT% وأفلته لتنظيم القصة.",
				lblColTitle: "العنوان",
				lblColStatus: "الحالة",
				btnApplyWarning: "تأكيد حذف %NB% %LBL_LAYOUT%",
				deleteTooltip: "حذف",
				firstSectionExplain: "(يتعذر نقل جزء الصفحة الرئيسية)"
			},
			help: {
				lblHelp: "تعليمات",
				lblAdd: "إضافة",
				lblSettings: "إعدادات",
				lblOrga: "تنظيم",
				lblEdit: "عمليات التحرير",
				lblPublish: "مشاركة",
				lblTips: "نصائح",
				lblMore: "هل تريد المزيد؟",
				lblLink: "تفضل بزيارة خرائط قصة Esri.",
				content1Div1: "لإنشاء %TPL_NAME%، استخدم زر إضافة لإضافة كل خريطة أو محتوى آخر في التخطيط. يمكن أن يشمل المحتوى الآخر صورًا أو مقاطع فيديو أو كود أو صفحات ويب مضمنة. على سبيل المثال، قد تريد من قرائك رؤية صورة أو مقطع فيديو تقديمي عند تشغيل %TPL_NAME% للمرة الأولى قبل انتقالهم إلى استكشاف الخرائط.",
				content1Div2: "عند النقر على زر إضافة، سيظهر مريع حوار يتيح لك اختيار وتكوين الخريطة أو المحتوى الآخر الذي تريد إضافته. على سبيل المثال، يمكنك تحديد الموقع الذي تريد من الخريطة عرضه وتمكين وسيلة الإيضاح وغير ذلك.",
				content2Div1: "في مريع حوار الإعدادات، يمكنك تغيير مظهر %TPL_NAME% من خلال تغيير التخطيط واختيار موضوع لون آخر واختيار وسيلة إيضاح الخريطة التي ستظهر، وغير ذلك.",
				content2Div2: "يمكنك أيضًا استبدال شعار Esri في عنوان %TPL_NAME% بشعارك الخاص لإظهار اسم علامتك التجارية. يمكنك أيضًا تحديد موقع الويب الذي سيتم تشغيله عندما ينقر القُرّاء على شعارك حتى يحصلوا على مزيد من المعلومات.",
				content3Div1: "يُتيح لك مربع حوار (تنظيم) إدارة %TPL_NAME%، كما يتيح لك تغيير ترتيب السلسلة عبر السحب والإفلات.",
				content3Div2: "يمكنك أيضًا حذف المحتوى أو إخفاؤه. ويعد الإخفاء عمليًا إذا كنت تُعد محتوى جديد غير جاهز لتضمينه في خريطة تبادل القصص حتى الآن.",
				content4Div1: "هل عثرت على خطأ أو تريد تغيير المادة؟ لا تقلق. ابحث عن أيقونة التحرير خلال التطبيق لتغيير المحتوى. ستستخدم وظائف التحرير أكثر من مرة أثناء تطوير %TPL_NAME%!",
				content5Div1: "عند حفظ %TPL_NAME%، فإنه يكون خاصًا بشكل أولي. استخدم زر مشاركة لمشاركته مع الآخرين. يمكنك مشاركة %TPL_NAME% مع الجميع حتى يمكن لكل المستخدمين الوصول إليه.",
				content5Div2: "باستخدام حسابك، قد يتوفر لديك خيار مشاركة %TPL_NAME% للمستخدمين ضمن مؤسستك؛ لذا لا يمكن للآخرين الوصول إليه.",
				content6Div1: "افتراضيًا، يتم تزامن الخرائط في سلسلة لعرض نفس الموقع، وهو ما يعني أن الموقع المعروض في الخريطة الأولى سيتم تطبيقه تلقائيًا على كل الخرائط الأخرى، كما يعني أيضًا أنه إذا قام القارئ بالتصغير أو التكبير أو الإزاحة إلى موقع آخر في الخريطة التي يبحثون عنها حاليًا، سيتم تطبيقه أيضًا على كل الخرائط الأخرى.",
				content6Div2: "على سبيل المثال، إذا أظهرت سلسلتك بيانات موضوعية مختلفة لمدينة ما، يمكن للقارئ تكبير المجاورة، ومن ثمّ التبديل ببساطة بين علامات التبويب لروية خرائط تلك المنطقة.",
				content6Div3: "لتعطيل تزامن الموقع، انتقل إلى مربع حوار الإعدادات وقم بإلغاء التأشير على هذا الإعداد في علامة تبويب خيارات الخريطة.",
				content6AltDiv1: "يتم تزامن موقع الخرائط افتراضيًا، ويتيح تعطيل التزامن لكل خريطة عرض موقع مختلف.",
				content6AltDiv2: "تشغيل التزامن",
				content6AltDiv3: "إيقاف تشغيل التزامن",
				content6AltDiv4: "لتعطيل التزامن، انتقل إلى إعدادات > خيارات الخريطة وقم بإلغاء التأشير على \"تزامن مواقع الخريطة\"."
			},
			landing: {
				lblAdd: "ما الاسم الذي تريد إطلاقه على سلسلة خرائط %LAYOUT_TITLE%؟",
				phAdd: "أدخل العنوان...",
				lblOR: "أو",
				lblHelp: "بدء جولة"
			}
        }
    })
);
