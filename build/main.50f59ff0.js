(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{188:function(e,t,n){e.exports=n.p+"static/media/basic-usage.dcead28f.md"},189:function(e,t,n){e.exports=n.p+"static/media/set-initial-features.6e763d6d.md"},190:function(e,t,n){e.exports=n.p+"static/media/change-mode.4c139d5f.md"},191:function(e,t,n){e.exports=n.p+"static/media/change-control-position.0aa5f0c3.md"},192:function(e,t,n){"use strict";n.r(t);var a=n(211),i=n(212),r=n(217),o=n(213),s=n(218),c=n(1),l=n(90),p=n(214),d=n.n(p),u=n(215),_=n.n(u),m=n(216),j=n.n(m),h=function(e){function t(){var e,n;Object(a.a)(this,t);for(var i=arguments.length,s=new Array(i),c=0;c<i;c++)s[c]=arguments[c];return(n=Object(r.a)(this,(e=Object(o.a)(t)).call.apply(e,[this].concat(s))))._createControl=function(){var e=n._map;n._draw=new d.a({keybindings:n.props.keybindings,touchEnabled:n.props.touchEnabled,boxSelect:n.props.boxSelect,clickBuffer:n.props.clickBuffer,touchBuffer:n.props.touchBuffer,controls:{point:n.props.pointControl,line_string:n.props.lineStringControl,polygon:n.props.polygonControl,trash:n.props.trashControl,combine_features:n.props.combineFeaturesControl,uncombine_features:n.props.uncombineFeaturesControl},displayControlsDefault:n.props.displayControlsDefault,styles:n.props.styles,modes:"function"==typeof n.props.modes?n.props.modes(n.constructor.defaultProps.modes):n.props.modes,defaultMode:n.props.mode,userProperties:n.props.userProperties}),e.addControl(n._draw,n.props.position),e.on("draw.create",n._onDrawCreate),e.on("draw.create",n._onChange),e.on("draw.delete",n._onDrawDelete),e.on("draw.delete",n._onChange),e.on("draw.combine",n._onDrawCombine),e.on("draw.combine",n._onChange),e.on("draw.uncombine",n._onDrawUncombine),e.on("draw.uncombine",n._onChange),e.on("draw.update",n._onDrawUpdate),e.on("draw.update",n._onChange),e.on("draw.selectionchange",n._onDrawSelectionchange),e.on("draw.modechange",n._onDrawModechange),e.on("draw.render",n._onDrawRender),e.on("draw.actionable",n._onDrawActionable),n.props.data&&n._draw.add(n.props.data)},n._onChange=function(){var e=n.props.onChange;e&&e(n._draw.getAll())},n._onDrawCreate=function(e){n.props.onDrawCreate&&n.props.onDrawCreate(e)},n._onDrawDelete=function(e){n.props.onDrawDelete&&n.props.onDrawDelete(e)},n._onDrawCombine=function(e){n.props.onDrawCombine&&n.props.onDrawCombine(e)},n._onDrawUncombine=function(e){n.props.onDrawUncombine&&n.props.onDrawUncombine(e)},n._onDrawUpdate=function(e){n.props.onDrawUpdate&&n.props.onDrawUpdate(e)},n._onDrawSelectionchange=function(e){n.props.onDrawSelectionChange&&n.props.onDrawSelectionChange(e)},n._onDrawModechange=function(e){n.props.onDrawModeChange&&n.props.onDrawModeChange(e)},n._onDrawRender=function(e){n.props.onDrawRender&&n.props.onDrawRender(e)},n._onDrawActionable=function(e){n.props.onDrawActionable&&n.props.onDrawActionable(e)},n}return Object(s.a)(t,e),Object(i.a)(t,[{key:"componentDidMount",value:function(){this._createControl()}},{key:"componentDidUpdate",value:function(e){this.props.data&&this._draw.set(this.props.data),e.position!==this.props.position&&(this._map.removeControl(this._draw),this._createControl()),e.mode!==this.props.mode&&this._draw.changeMode(this.props.mode,this.props.modeOptions)}},{key:"componentWillUnmount",value:function(){this._map&&this._map.getStyle()&&this._map.removeControl(this._draw)}},{key:"getDraw",value:function(){return this._draw}},{key:"render",value:function(){var e=this;return c.createElement(l.a.Consumer,{},(function(t){return t&&(e._map=t),null}))}}]),t}(c.PureComponent);h.defaultProps={position:"top-right",keybindings:!0,touchEnabled:!0,boxSelect:!0,clickBuffer:2,touchBuffer:25,pointControl:!0,lineStringControl:!0,polygonControl:!0,trashControl:!0,combineFeaturesControl:!0,uncombineFeaturesControl:!0,displayControlsDefault:!0,styles:_.a,modes:j.a,mode:"simple_select",modeOptions:{},userProperties:!1,data:null,onDrawCreate:null,onDrawDelete:null,onDrawCombine:null,onDrawUncombine:null,onDrawUpdate:null,onDrawSelectionChange:null,onDrawModeChange:null,onDrawRender:null,onDrawActionable:null,onChange:null},t.default=h},219:function(e,t,n){n(220),e.exports=n(833)},220:function(e,t,n){"use strict";n.r(t),function(e){n(221),n(222);var t=n(90);e.MapGL=t.b,e.MAPBOX_ACCESS_TOKEN="pk.eyJ1IjoiZGV2aWNlMjUiLCJhIjoiY2lzaGN3d2tiMDAxOTJ6bGYydDZrcHptdiJ9.UK55aUzBquqYns1AdnuTQg"}.call(this,n(20))},386:function(e,t,n){var a={"./Binary_Property/ASCII.js":387,"./Binary_Property/ASCII_Hex_Digit.js":388,"./Binary_Property/Alphabetic.js":389,"./Binary_Property/Any.js":390,"./Binary_Property/Assigned.js":391,"./Binary_Property/Bidi_Control.js":392,"./Binary_Property/Bidi_Mirrored.js":393,"./Binary_Property/Case_Ignorable.js":394,"./Binary_Property/Cased.js":395,"./Binary_Property/Changes_When_Casefolded.js":396,"./Binary_Property/Changes_When_Casemapped.js":397,"./Binary_Property/Changes_When_Lowercased.js":398,"./Binary_Property/Changes_When_NFKC_Casefolded.js":399,"./Binary_Property/Changes_When_Titlecased.js":400,"./Binary_Property/Changes_When_Uppercased.js":401,"./Binary_Property/Dash.js":402,"./Binary_Property/Default_Ignorable_Code_Point.js":403,"./Binary_Property/Deprecated.js":404,"./Binary_Property/Diacritic.js":405,"./Binary_Property/Emoji.js":406,"./Binary_Property/Emoji_Component.js":407,"./Binary_Property/Emoji_Modifier.js":408,"./Binary_Property/Emoji_Modifier_Base.js":409,"./Binary_Property/Emoji_Presentation.js":410,"./Binary_Property/Extended_Pictographic.js":411,"./Binary_Property/Extender.js":412,"./Binary_Property/Grapheme_Base.js":413,"./Binary_Property/Grapheme_Extend.js":414,"./Binary_Property/Hex_Digit.js":415,"./Binary_Property/IDS_Binary_Operator.js":416,"./Binary_Property/IDS_Trinary_Operator.js":417,"./Binary_Property/ID_Continue.js":418,"./Binary_Property/ID_Start.js":419,"./Binary_Property/Ideographic.js":420,"./Binary_Property/Join_Control.js":421,"./Binary_Property/Logical_Order_Exception.js":422,"./Binary_Property/Lowercase.js":423,"./Binary_Property/Math.js":424,"./Binary_Property/Noncharacter_Code_Point.js":425,"./Binary_Property/Pattern_Syntax.js":426,"./Binary_Property/Pattern_White_Space.js":427,"./Binary_Property/Quotation_Mark.js":428,"./Binary_Property/Radical.js":429,"./Binary_Property/Regional_Indicator.js":430,"./Binary_Property/Sentence_Terminal.js":431,"./Binary_Property/Soft_Dotted.js":432,"./Binary_Property/Terminal_Punctuation.js":433,"./Binary_Property/Unified_Ideograph.js":434,"./Binary_Property/Uppercase.js":435,"./Binary_Property/Variation_Selector.js":436,"./Binary_Property/White_Space.js":437,"./Binary_Property/XID_Continue.js":438,"./Binary_Property/XID_Start.js":439,"./General_Category/Cased_Letter.js":440,"./General_Category/Close_Punctuation.js":441,"./General_Category/Connector_Punctuation.js":442,"./General_Category/Control.js":443,"./General_Category/Currency_Symbol.js":444,"./General_Category/Dash_Punctuation.js":445,"./General_Category/Decimal_Number.js":446,"./General_Category/Enclosing_Mark.js":447,"./General_Category/Final_Punctuation.js":448,"./General_Category/Format.js":449,"./General_Category/Initial_Punctuation.js":450,"./General_Category/Letter.js":451,"./General_Category/Letter_Number.js":452,"./General_Category/Line_Separator.js":453,"./General_Category/Lowercase_Letter.js":454,"./General_Category/Mark.js":455,"./General_Category/Math_Symbol.js":456,"./General_Category/Modifier_Letter.js":457,"./General_Category/Modifier_Symbol.js":458,"./General_Category/Nonspacing_Mark.js":459,"./General_Category/Number.js":460,"./General_Category/Open_Punctuation.js":461,"./General_Category/Other.js":462,"./General_Category/Other_Letter.js":463,"./General_Category/Other_Number.js":464,"./General_Category/Other_Punctuation.js":465,"./General_Category/Other_Symbol.js":466,"./General_Category/Paragraph_Separator.js":467,"./General_Category/Private_Use.js":468,"./General_Category/Punctuation.js":469,"./General_Category/Separator.js":470,"./General_Category/Space_Separator.js":471,"./General_Category/Spacing_Mark.js":472,"./General_Category/Surrogate.js":473,"./General_Category/Symbol.js":474,"./General_Category/Titlecase_Letter.js":475,"./General_Category/Unassigned.js":476,"./General_Category/Uppercase_Letter.js":477,"./Script/Adlam.js":478,"./Script/Ahom.js":479,"./Script/Anatolian_Hieroglyphs.js":480,"./Script/Arabic.js":481,"./Script/Armenian.js":482,"./Script/Avestan.js":483,"./Script/Balinese.js":484,"./Script/Bamum.js":485,"./Script/Bassa_Vah.js":486,"./Script/Batak.js":487,"./Script/Bengali.js":488,"./Script/Bhaiksuki.js":489,"./Script/Bopomofo.js":490,"./Script/Brahmi.js":491,"./Script/Braille.js":492,"./Script/Buginese.js":493,"./Script/Buhid.js":494,"./Script/Canadian_Aboriginal.js":495,"./Script/Carian.js":496,"./Script/Caucasian_Albanian.js":497,"./Script/Chakma.js":498,"./Script/Cham.js":499,"./Script/Cherokee.js":500,"./Script/Common.js":501,"./Script/Coptic.js":502,"./Script/Cuneiform.js":503,"./Script/Cypriot.js":504,"./Script/Cyrillic.js":505,"./Script/Deseret.js":506,"./Script/Devanagari.js":507,"./Script/Dogra.js":508,"./Script/Duployan.js":509,"./Script/Egyptian_Hieroglyphs.js":510,"./Script/Elbasan.js":511,"./Script/Elymaic.js":512,"./Script/Ethiopic.js":513,"./Script/Georgian.js":514,"./Script/Glagolitic.js":515,"./Script/Gothic.js":516,"./Script/Grantha.js":517,"./Script/Greek.js":518,"./Script/Gujarati.js":519,"./Script/Gunjala_Gondi.js":520,"./Script/Gurmukhi.js":521,"./Script/Han.js":522,"./Script/Hangul.js":523,"./Script/Hanifi_Rohingya.js":524,"./Script/Hanunoo.js":525,"./Script/Hatran.js":526,"./Script/Hebrew.js":527,"./Script/Hiragana.js":528,"./Script/Imperial_Aramaic.js":529,"./Script/Inherited.js":530,"./Script/Inscriptional_Pahlavi.js":531,"./Script/Inscriptional_Parthian.js":532,"./Script/Javanese.js":533,"./Script/Kaithi.js":534,"./Script/Kannada.js":535,"./Script/Katakana.js":536,"./Script/Kayah_Li.js":537,"./Script/Kharoshthi.js":538,"./Script/Khmer.js":539,"./Script/Khojki.js":540,"./Script/Khudawadi.js":541,"./Script/Lao.js":542,"./Script/Latin.js":543,"./Script/Lepcha.js":544,"./Script/Limbu.js":545,"./Script/Linear_A.js":546,"./Script/Linear_B.js":547,"./Script/Lisu.js":548,"./Script/Lycian.js":549,"./Script/Lydian.js":550,"./Script/Mahajani.js":551,"./Script/Makasar.js":552,"./Script/Malayalam.js":553,"./Script/Mandaic.js":554,"./Script/Manichaean.js":555,"./Script/Marchen.js":556,"./Script/Masaram_Gondi.js":557,"./Script/Medefaidrin.js":558,"./Script/Meetei_Mayek.js":559,"./Script/Mende_Kikakui.js":560,"./Script/Meroitic_Cursive.js":561,"./Script/Meroitic_Hieroglyphs.js":562,"./Script/Miao.js":563,"./Script/Modi.js":564,"./Script/Mongolian.js":565,"./Script/Mro.js":566,"./Script/Multani.js":567,"./Script/Myanmar.js":568,"./Script/Nabataean.js":569,"./Script/Nandinagari.js":570,"./Script/New_Tai_Lue.js":571,"./Script/Newa.js":572,"./Script/Nko.js":573,"./Script/Nushu.js":574,"./Script/Nyiakeng_Puachue_Hmong.js":575,"./Script/Ogham.js":576,"./Script/Ol_Chiki.js":577,"./Script/Old_Hungarian.js":578,"./Script/Old_Italic.js":579,"./Script/Old_North_Arabian.js":580,"./Script/Old_Permic.js":581,"./Script/Old_Persian.js":582,"./Script/Old_Sogdian.js":583,"./Script/Old_South_Arabian.js":584,"./Script/Old_Turkic.js":585,"./Script/Oriya.js":586,"./Script/Osage.js":587,"./Script/Osmanya.js":588,"./Script/Pahawh_Hmong.js":589,"./Script/Palmyrene.js":590,"./Script/Pau_Cin_Hau.js":591,"./Script/Phags_Pa.js":592,"./Script/Phoenician.js":593,"./Script/Psalter_Pahlavi.js":594,"./Script/Rejang.js":595,"./Script/Runic.js":596,"./Script/Samaritan.js":597,"./Script/Saurashtra.js":598,"./Script/Sharada.js":599,"./Script/Shavian.js":600,"./Script/Siddham.js":601,"./Script/SignWriting.js":602,"./Script/Sinhala.js":603,"./Script/Sogdian.js":604,"./Script/Sora_Sompeng.js":605,"./Script/Soyombo.js":606,"./Script/Sundanese.js":607,"./Script/Syloti_Nagri.js":608,"./Script/Syriac.js":609,"./Script/Tagalog.js":610,"./Script/Tagbanwa.js":611,"./Script/Tai_Le.js":612,"./Script/Tai_Tham.js":613,"./Script/Tai_Viet.js":614,"./Script/Takri.js":615,"./Script/Tamil.js":616,"./Script/Tangut.js":617,"./Script/Telugu.js":618,"./Script/Thaana.js":619,"./Script/Thai.js":620,"./Script/Tibetan.js":621,"./Script/Tifinagh.js":622,"./Script/Tirhuta.js":623,"./Script/Ugaritic.js":624,"./Script/Vai.js":625,"./Script/Wancho.js":626,"./Script/Warang_Citi.js":627,"./Script/Yi.js":628,"./Script/Zanabazar_Square.js":629,"./Script_Extensions/Adlam.js":630,"./Script_Extensions/Ahom.js":631,"./Script_Extensions/Anatolian_Hieroglyphs.js":632,"./Script_Extensions/Arabic.js":633,"./Script_Extensions/Armenian.js":634,"./Script_Extensions/Avestan.js":635,"./Script_Extensions/Balinese.js":636,"./Script_Extensions/Bamum.js":637,"./Script_Extensions/Bassa_Vah.js":638,"./Script_Extensions/Batak.js":639,"./Script_Extensions/Bengali.js":640,"./Script_Extensions/Bhaiksuki.js":641,"./Script_Extensions/Bopomofo.js":642,"./Script_Extensions/Brahmi.js":643,"./Script_Extensions/Braille.js":644,"./Script_Extensions/Buginese.js":645,"./Script_Extensions/Buhid.js":646,"./Script_Extensions/Canadian_Aboriginal.js":647,"./Script_Extensions/Carian.js":648,"./Script_Extensions/Caucasian_Albanian.js":649,"./Script_Extensions/Chakma.js":650,"./Script_Extensions/Cham.js":651,"./Script_Extensions/Cherokee.js":652,"./Script_Extensions/Common.js":653,"./Script_Extensions/Coptic.js":654,"./Script_Extensions/Cuneiform.js":655,"./Script_Extensions/Cypriot.js":656,"./Script_Extensions/Cyrillic.js":657,"./Script_Extensions/Deseret.js":658,"./Script_Extensions/Devanagari.js":659,"./Script_Extensions/Dogra.js":660,"./Script_Extensions/Duployan.js":661,"./Script_Extensions/Egyptian_Hieroglyphs.js":662,"./Script_Extensions/Elbasan.js":663,"./Script_Extensions/Elymaic.js":664,"./Script_Extensions/Ethiopic.js":665,"./Script_Extensions/Georgian.js":666,"./Script_Extensions/Glagolitic.js":667,"./Script_Extensions/Gothic.js":668,"./Script_Extensions/Grantha.js":669,"./Script_Extensions/Greek.js":670,"./Script_Extensions/Gujarati.js":671,"./Script_Extensions/Gunjala_Gondi.js":672,"./Script_Extensions/Gurmukhi.js":673,"./Script_Extensions/Han.js":674,"./Script_Extensions/Hangul.js":675,"./Script_Extensions/Hanifi_Rohingya.js":676,"./Script_Extensions/Hanunoo.js":677,"./Script_Extensions/Hatran.js":678,"./Script_Extensions/Hebrew.js":679,"./Script_Extensions/Hiragana.js":680,"./Script_Extensions/Imperial_Aramaic.js":681,"./Script_Extensions/Inherited.js":682,"./Script_Extensions/Inscriptional_Pahlavi.js":683,"./Script_Extensions/Inscriptional_Parthian.js":684,"./Script_Extensions/Javanese.js":685,"./Script_Extensions/Kaithi.js":686,"./Script_Extensions/Kannada.js":687,"./Script_Extensions/Katakana.js":688,"./Script_Extensions/Kayah_Li.js":689,"./Script_Extensions/Kharoshthi.js":690,"./Script_Extensions/Khmer.js":691,"./Script_Extensions/Khojki.js":692,"./Script_Extensions/Khudawadi.js":693,"./Script_Extensions/Lao.js":694,"./Script_Extensions/Latin.js":695,"./Script_Extensions/Lepcha.js":696,"./Script_Extensions/Limbu.js":697,"./Script_Extensions/Linear_A.js":698,"./Script_Extensions/Linear_B.js":699,"./Script_Extensions/Lisu.js":700,"./Script_Extensions/Lycian.js":701,"./Script_Extensions/Lydian.js":702,"./Script_Extensions/Mahajani.js":703,"./Script_Extensions/Makasar.js":704,"./Script_Extensions/Malayalam.js":705,"./Script_Extensions/Mandaic.js":706,"./Script_Extensions/Manichaean.js":707,"./Script_Extensions/Marchen.js":708,"./Script_Extensions/Masaram_Gondi.js":709,"./Script_Extensions/Medefaidrin.js":710,"./Script_Extensions/Meetei_Mayek.js":711,"./Script_Extensions/Mende_Kikakui.js":712,"./Script_Extensions/Meroitic_Cursive.js":713,"./Script_Extensions/Meroitic_Hieroglyphs.js":714,"./Script_Extensions/Miao.js":715,"./Script_Extensions/Modi.js":716,"./Script_Extensions/Mongolian.js":717,"./Script_Extensions/Mro.js":718,"./Script_Extensions/Multani.js":719,"./Script_Extensions/Myanmar.js":720,"./Script_Extensions/Nabataean.js":721,"./Script_Extensions/Nandinagari.js":722,"./Script_Extensions/New_Tai_Lue.js":723,"./Script_Extensions/Newa.js":724,"./Script_Extensions/Nko.js":725,"./Script_Extensions/Nushu.js":726,"./Script_Extensions/Nyiakeng_Puachue_Hmong.js":727,"./Script_Extensions/Ogham.js":728,"./Script_Extensions/Ol_Chiki.js":729,"./Script_Extensions/Old_Hungarian.js":730,"./Script_Extensions/Old_Italic.js":731,"./Script_Extensions/Old_North_Arabian.js":732,"./Script_Extensions/Old_Permic.js":733,"./Script_Extensions/Old_Persian.js":734,"./Script_Extensions/Old_Sogdian.js":735,"./Script_Extensions/Old_South_Arabian.js":736,"./Script_Extensions/Old_Turkic.js":737,"./Script_Extensions/Oriya.js":738,"./Script_Extensions/Osage.js":739,"./Script_Extensions/Osmanya.js":740,"./Script_Extensions/Pahawh_Hmong.js":741,"./Script_Extensions/Palmyrene.js":742,"./Script_Extensions/Pau_Cin_Hau.js":743,"./Script_Extensions/Phags_Pa.js":744,"./Script_Extensions/Phoenician.js":745,"./Script_Extensions/Psalter_Pahlavi.js":746,"./Script_Extensions/Rejang.js":747,"./Script_Extensions/Runic.js":748,"./Script_Extensions/Samaritan.js":749,"./Script_Extensions/Saurashtra.js":750,"./Script_Extensions/Sharada.js":751,"./Script_Extensions/Shavian.js":752,"./Script_Extensions/Siddham.js":753,"./Script_Extensions/SignWriting.js":754,"./Script_Extensions/Sinhala.js":755,"./Script_Extensions/Sogdian.js":756,"./Script_Extensions/Sora_Sompeng.js":757,"./Script_Extensions/Soyombo.js":758,"./Script_Extensions/Sundanese.js":759,"./Script_Extensions/Syloti_Nagri.js":760,"./Script_Extensions/Syriac.js":761,"./Script_Extensions/Tagalog.js":762,"./Script_Extensions/Tagbanwa.js":763,"./Script_Extensions/Tai_Le.js":764,"./Script_Extensions/Tai_Tham.js":765,"./Script_Extensions/Tai_Viet.js":766,"./Script_Extensions/Takri.js":767,"./Script_Extensions/Tamil.js":768,"./Script_Extensions/Tangut.js":769,"./Script_Extensions/Telugu.js":770,"./Script_Extensions/Thaana.js":771,"./Script_Extensions/Thai.js":772,"./Script_Extensions/Tibetan.js":773,"./Script_Extensions/Tifinagh.js":774,"./Script_Extensions/Tirhuta.js":775,"./Script_Extensions/Ugaritic.js":776,"./Script_Extensions/Vai.js":777,"./Script_Extensions/Wancho.js":778,"./Script_Extensions/Warang_Citi.js":779,"./Script_Extensions/Yi.js":780,"./Script_Extensions/Zanabazar_Square.js":781,"./index.js":782,"./unicode-version.js":783};function i(e){var t=r(e);return n(t)}function r(e){if(!n.o(a,e)){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}return a[e]}i.keys=function(){return Object.keys(a)},i.resolve=r,e.exports=i,i.id=386},803:function(e,t,n){e.exports={methods:[],doclets:{},displayName:"BasicUsage",examples:n(804)}},804:function(e,t,n){var a={react:n(1),"./basic-usage.md":n(188)},i=n(61).default.bind(null,a),r=n(62).default.bind(null,"const React$0 = require('react');\nconst React = React$0['React'] || (React$0.default || React$0);\nconst BasicUsage$0 = require('./basic-usage.md');\nconst BasicUsage = BasicUsage$0['BasicUsage'] || (BasicUsage$0.default || BasicUsage$0);",i);e.exports=[{type:"code",content:"import React from 'react';\nimport MapGL from '@urbica/react-map-gl';\nimport Draw from '@urbica/react-map-gl-draw';\nimport 'mapbox-gl/dist/mapbox-gl.css';\nimport '@mapbox/mapbox-gl-draw/dist/mapbox-gl-draw.css';\n\ninitialState = {\n  features: []\n};\n\n<>\n  <MapGL\n    style={{ width: \"100%\", height: \"400px\" }}\n    mapStyle=\"mapbox://styles/mapbox/light-v9\"\n    accessToken={MAPBOX_ACCESS_TOKEN}\n    latitude={37.78}\n    longitude={-122.41}\n    zoom={11}\n  >\n    <Draw\n      onDrawCreate={({features}) => setState({features})}\n      onDrawUpdate={({features}) => setState({features})}\n    />\n  </MapGL>\n  <div>\n    {JSON.stringify(state.features)}\n  </div>\n</>",settings:{},evalInContext:r}]},805:function(e,t,n){e.exports={methods:[],doclets:{},displayName:"SetInitialFeatures",examples:n(806)}},806:function(e,t,n){var a={react:n(1),"./set-initial-features.md":n(189)},i=n(61).default.bind(null,a),r=n(62).default.bind(null,"const React$0 = require('react');\nconst React = React$0['React'] || (React$0.default || React$0);\nconst SetInitialFeatures$0 = require('./set-initial-features.md');\nconst SetInitialFeatures = SetInitialFeatures$0['SetInitialFeatures'] || (SetInitialFeatures$0.default || SetInitialFeatures$0);",i);e.exports=[{type:"code",content:'import React from \'react\';\nimport MapGL from \'@urbica/react-map-gl\';\nimport Draw from \'@urbica/react-map-gl-draw\';\nimport \'mapbox-gl/dist/mapbox-gl.css\';\nimport \'@mapbox/mapbox-gl-draw/dist/mapbox-gl-draw.css\';  \n\ninitialState = {\n  data: {\n    type: "FeatureCollection",\n    features: [{\n      type: "Feature",\n      properties:{},\n      geometry: {\n        coordinates: [\n          -122.41411987304815,\n          37.792209769935084\n        ],\n      type: "Point"\n      }\n    }]\n  }\n};\n\n<>\n  <MapGL\n    style={{ width: "100%", height: "400px" }}\n    mapStyle="mapbox://styles/mapbox/light-v9"\n    accessToken={MAPBOX_ACCESS_TOKEN}\n    latitude={37.78}\n    longitude={-122.41}\n    zoom={11}\n  >\n    <Draw\n      data={state.data}\n      onChange={(data) => setState({data})}\n    />\n  </MapGL>\n  <div>\n    {JSON.stringify(state.data)}\n  </div>\n</>',settings:{},evalInContext:r}]},807:function(e,t,n){e.exports={methods:[],doclets:{},displayName:"ChangeMode",examples:n(808)}},808:function(e,t,n){var a={react:n(1),"./change-mode.md":n(190)},i=n(61).default.bind(null,a),r=n(62).default.bind(null,"const React$0 = require('react');\nconst React = React$0['React'] || (React$0.default || React$0);\nconst ChangeMode$0 = require('./change-mode.md');\nconst ChangeMode = ChangeMode$0['ChangeMode'] || (ChangeMode$0.default || ChangeMode$0);",i);e.exports=[{type:"code",content:"import React from 'react';\nimport MapGL from '@urbica/react-map-gl';\nimport Draw from '@urbica/react-map-gl-draw';\nimport 'mapbox-gl/dist/mapbox-gl.css';\nimport '@mapbox/mapbox-gl-draw/dist/mapbox-gl-draw.css';  \n\ninitialState = {\n  mode: 'simple_select'\n};\n\n<>\n  <div>Mode: {state.mode}</div>\n  <div>\n    <button onClick={() => setState({ mode: 'simple_select' })}>simple_select</button>\n    <button onClick={() => setState({ mode: 'draw_line_string' })}>draw_line_string</button>\n    <button onClick={() => setState({ mode: 'draw_polygon' })}>draw_polygon</button>\n    <button onClick={() => setState({ mode: 'draw_point' })}>draw_point</button>\n  </div>\n  <MapGL\n    style={{ width: \"100%\", height: \"400px\" }}\n    mapStyle=\"mapbox://styles/mapbox/light-v9\"\n    accessToken={MAPBOX_ACCESS_TOKEN}\n    latitude={37.78}\n    longitude={-122.41}\n    zoom={11}\n  >\n    <Draw\n        mode={state.mode}\n        onDrawModeChange={({ mode }) => setState({ mode })}\n    />\n  </MapGL>\n</>",settings:{},evalInContext:r}]},809:function(e,t,n){e.exports={methods:[],doclets:{},displayName:"ChangeControlPosition",examples:n(810)}},810:function(e,t,n){var a={react:n(1),"./change-control-position.md":n(191)},i=n(61).default.bind(null,a),r=n(62).default.bind(null,"const React$0 = require('react');\nconst React = React$0['React'] || (React$0.default || React$0);\nconst ChangeControlPosition$0 = require('./change-control-position.md');\nconst ChangeControlPosition = ChangeControlPosition$0['ChangeControlPosition'] || (ChangeControlPosition$0.default || ChangeControlPosition$0);",i);e.exports=[{type:"code",content:'import React from \'react\';\nimport MapGL from \'@urbica/react-map-gl\';\nimport Draw from \'@urbica/react-map-gl-draw\';\nimport \'mapbox-gl/dist/mapbox-gl.css\';\nimport \'@mapbox/mapbox-gl-draw/dist/mapbox-gl-draw.css\';  \n\ninitialState = {\n  data: {\n    type: "FeatureCollection",\n    features: [{\n      type: "Feature",\n      properties:{},\n      geometry: {\n        coordinates: [\n          -122.41411987304815,\n          37.792209769935084\n        ],\n      type: "Point"\n      }\n    }]\n  },\n  position: \'top-left\'\n};\n\n<>\n  <select onChange={(e) => setState({position: e.target.value})}>\n    <option value="top-left">top-left</option>\n    <option value="top-right">top-right</option>\n  </select>\n  <MapGL\n    style={{ width: "100%", height: "400px" }}\n    mapStyle="mapbox://styles/mapbox/light-v9"\n    accessToken={MAPBOX_ACCESS_TOKEN}\n    latitude={37.78}\n    longitude={-122.41}\n    zoom={11}\n  >\n    <Draw\n      data={state.data}\n      onChange={(data) => setState({data})}\n      position={state.position}\n    />\n  </MapGL>\n  <div>\n    {JSON.stringify(state.data)}\n  </div>\n</>',settings:{},evalInContext:r}]},831:function(e,t,n){e.exports={description:"",displayName:"Draw",methods:[],props:[{required:!1,flowType:{name:"boolean"},description:"Whether or not to enable box selection of features with shift+click+drag.\nIf false, shift+click+drag zooms into an area.",defaultValue:{value:"true",computed:!1},tags:{},name:"boxSelect"},{required:!1,flowType:{name:"number"},description:"Number of pixels around any feature or vertex (in every direction)\nthat will respond to a click.",defaultValue:{value:"2",computed:!1},tags:{},name:"clickBuffer"},{required:!1,flowType:{name:"boolean"},description:"Hide or show Combine Features Control.",defaultValue:{value:"true",computed:!1},tags:{},name:"combineFeaturesControl"},{required:!1,flowType:{name:"Object"},description:"Valid geoJSON to edit with Draw.",defaultValue:{value:"null",computed:!1},tags:{},name:"data"},{required:!1,flowType:{name:"boolean"},description:"The default value for controls. For example, if you would like all\n controls to be off by default, and specify a whitelist with controls,\n use displayControlsDefault: false.",defaultValue:{value:"true",computed:!1},tags:{},name:"displayControlsDefault"},{required:!1,flowType:{name:"boolean"},description:"Whether or not to enable keyboard interactions for drawing.",defaultValue:{value:"true",computed:!1},tags:{},name:"keybindings"},{required:!1,flowType:{name:"boolean"},description:"Hide or show Line String Control.",defaultValue:{value:"true",computed:!1},tags:{},name:"lineStringControl"},{required:!1,flowType:{name:"String"},description:"The mode that will used.",defaultValue:{value:"'simple_select'",computed:!1},tags:{},name:"mode"},{required:!1,flowType:{name:"Object"},description:"The mode options.",defaultValue:{value:"{}",computed:!1},tags:{},name:"modeOptions"},{required:!1,flowType:{name:"union",raw:"Object | Function",elements:[{name:"Object"},{name:"Function"}]},description:"Over ride the default modes with your own.\nCan accepts a function. That function will receive the default modes as the\nfirst argument",defaultValue:{value:"modes",computed:!0},tags:{},name:"modes"},{required:!1,flowType:{name:"Function"},description:"Fired when features are changed. (`draw.create`, `draw.delete`,\n`draw.combine`, `draw.uncombine`, `draw.update`).",defaultValue:{value:"null",computed:!1},tags:{},name:"onChange"},{required:!1,flowType:{name:"Function"},description:"Fired as the state of Draw changes to enable and disable different actions.\nFollowing this event will enable you know if `draw.trash()`,\n`draw.combineFeatures()` and draw.uncombineFeatures() will have an effect.",defaultValue:{value:"null",computed:!1},tags:{},name:"onDrawActionable"},{required:!1,flowType:{name:"Function"},description:"Fired when features are combined. The following interactions will\ntrigger this event:\n\u2022 Click the Combine button when more than one features are selected\n  in simple_select mode.\n\u2022 Invoke draw.combineFeatures() when more than one features are selected\n  in simple_select mode.",defaultValue:{value:"null",computed:!1},tags:{},name:"onDrawCombine"},{required:!1,flowType:{name:"Function"},description:"Fired when a feature is created.\nThe following interactions will trigger this event:\n\u2022 Finish drawing a feature. Simply clicking will create a Point.\n  A LineString or Polygon is only created when the user\n  has finished drawing it \u2014 i.e. double-clicked the last vertex\n  or hit Enter \u2014 and the drawn feature is valid.",defaultValue:{value:"null",computed:!1},tags:{},name:"onDrawCreate"},{required:!1,flowType:{name:"Function"},description:"Fired when one or more features are deleted.\nThe following interactions will trigger this event:\n\u2022 Click the trash button when one or more features are selected\n  in simple_select mode.\n\u2022 Hit the Backspace or Delete keys when one or features are selected\n  in simple_select mode.\n\u2022 Invoke draw.trash() when you have a feature selected in\n  simple_select mode.",defaultValue:{value:"null",computed:!1},tags:{},name:"onDrawDelete"},{required:!1,flowType:{name:"Function"},description:"Fired when the mode is changed. The following interactions will trigger\nthis event:\n\u2022 Click the point, line, or polygon buttons to begin drawing (enter a\n  `draw_*` mode).\n\u2022 Finish drawing a feature (enter `simple_select` mode).\n\u2022 While in `simple_select` mode, click on an already selected feature\n  (enter `direct_select` mode).\n\u2022 While in `direct_select` mode, click outside all features (enter\n  `simple_select` mode).\nThis event is fired just after the current mode stops and just before\nthe next mode starts. A render will not happen until after all event\nhandlers have been triggered, so you can force a mode redirect by calling\n`draw.changeMode()` inside a `draw.modechange` handler.",defaultValue:{value:"null",computed:!1},tags:{},name:"onDrawModeChange"},{required:!1,flowType:{name:"Function"},description:"Fired just after Draw calls `setData()` on the Mapbox GL JS map. This does\nnot imply that the set data call has finished updating the map, just that\nthe map is being updated.",defaultValue:{value:"null",computed:!1},tags:{},name:"onDrawRender"},{required:!1,flowType:{name:"Function"},description:"Fired when the selection is changed (i.e. one or more features are selected\nor deselected). The following interactions will trigger this event:\n\u2022 Click on a feature to select it.\n\u2022 When a feature is already selected, shift-click on another feature to add\n  it to the selection.\n\u2022 Click on a vertex to select it.\n\u2022 When a vertex is already selected, shift-click on another vertex to add\n  it to the selection.\n\u2022 Create a box-selection that includes at least one feature.\n\u2022 Click outside the selected feature(s) to deselect.\n\u2022 Click away from the selected vertex(s) to deselect.\n\u2022 Finish drawing a feature (features are selected just after they are\n  created).\n\u2022 When a feature is already selected, invoke draw.changeMode() such that\n  the feature becomes deselected.\n\u2022 Use `draw.changeMode('simple_select', { featureIds: [..] })` to switch to\n  `simple_select` mode and immediately select the specified features.\n\u2022 Use `draw.delete`, `draw.deleteAll` or `draw.trash` to delete feature(s).",defaultValue:{value:"null",computed:!1},tags:{},name:"onDrawSelectionChange"},{required:!1,flowType:{name:"Function"},description:"Fired when features are uncombined. The following interactions will\ntrigger this event:\n\u2022 Click the Uncombine button when one or more multifeatures are selected\n  in simple_select mode. Non-multifeatures may also be selected.\n\u2022 Invoke draw.uncombineFeatures() when one or more multifeatures are\n  selected in simple_select mode. Non-multifeatures may also be selected.",defaultValue:{value:"null",computed:!1},tags:{},name:"onDrawUncombine"},{required:!1,flowType:{name:"Function"},description:"Fired when one or more features are updated. The following interactions\nwill trigger this event, which can be subcategorized by action:\n\u2022 `action: 'move'`\n  \u2022 Finish moving one or more selected features in `simple_select` mode.\n     The event will only fire when the movement is finished\n     (i.e. when the user releases the mouse button or hits Enter).\n\u2022 `action: 'change_coordinates'`\n  \u2022 Finish moving one or more vertices of a selected feature in\n    `direct_select` mode. The event will only fire when the movement\n    is finished (i.e. when the user releases the mouse button or\n    hits Enter, or her mouse leaves the map container).\n  \u2022 Delete one or more vertices of a selected feature in `direct_select`\n    mode, which can be done by hitting the Backspace or Delete keys,\n    clicking the Trash button, or invoking draw.trash().\n  \u2022 Add a vertex to the selected feature by clicking a midpoint on that\n    feature in direct_select mode.\nThis event will not fire when a feature is created or deleted. To track\nthose interactions, listen for draw.create and draw.delete events.",defaultValue:{value:"null",computed:!1},tags:{},name:"onDrawUpdate"},{required:!1,flowType:{name:"boolean"},description:"Hide or show Point Control.",defaultValue:{value:"true",computed:!1},tags:{},name:"pointControl"},{required:!1,flowType:{name:"boolean"},description:"Hide or show Polygon Control.",defaultValue:{value:"true",computed:!1},tags:{},name:"polygonControl"},{required:!1,flowType:{name:"union",raw:"'top-left' | 'top-right' | 'bottom-left' | 'bottom-right'",elements:[{name:"literal",value:"'top-left'"},{name:"literal",value:"'top-right'"},{name:"literal",value:"'bottom-left'"},{name:"literal",value:"'bottom-right'"}]},description:"Draw controls position",defaultValue:{value:"'top-right'",computed:!1},tags:{},name:"position"},{required:!1,flowType:{name:"Array",elements:[{name:"Object"}],raw:"Array<Object>"},description:"An array of map style objects.",defaultValue:{value:"theme",computed:!0},tags:{},name:"styles"},{required:!1,flowType:{name:"number"},description:"Number of pixels around any feature of vertex (in every direction)\nthat will respond to a touch.",defaultValue:{value:"25",computed:!1},tags:{},name:"touchBuffer"},{required:!1,flowType:{name:"boolean"},description:"Whether or not to enable touch interactions for drawing.",defaultValue:{value:"true",computed:!1},tags:{},name:"touchEnabled"},{required:!1,flowType:{name:"boolean"},description:"Hide or show Trash Control.",defaultValue:{value:"true",computed:!1},tags:{},name:"trashControl"},{required:!1,flowType:{name:"boolean"},description:"Hide or show Uncombine Features Control.",defaultValue:{value:"true",computed:!1},tags:{},name:"uncombineFeaturesControl"},{required:!1,flowType:{name:"boolean"},description:"Properties of a feature will also be available for styling\nand prefixed with user_, e.g., ['==', 'user_custom_label', 'Example']",defaultValue:{value:"false",computed:!1},tags:{},name:"userProperties"}],doclets:{},examples:n(832)}},832:function(e,t,n){var a={react:n(1),"./index.js":n(192)},i=n(61).default.bind(null,a),r=n(62).default.bind(null,"const React$0 = require('react');\nconst React = React$0['React'] || (React$0.default || React$0);\nconst Draw$0 = require('./index.js');\nconst Draw = Draw$0['Draw'] || (Draw$0.default || Draw$0);",i);e.exports=[{type:"code",content:'<div>\n    <MapGL\n      style={{ width: "100%", height: "400px" }}\n      mapStyle="mapbox://styles/mapbox/light-v9"\n      accessToken={MAPBOX_ACCESS_TOKEN}\n      latitude={37.78}\n      longitude={-122.41}\n      zoom={11}\n    >\n      <Draw />\n    </MapGL>\n</div>',settings:{},evalInContext:r}]}},[[219,1,2]]]);