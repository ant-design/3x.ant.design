(window.webpackJsonp=window.webpackJsonp||[]).push([[199],{1688:function(n,a){n.exports={content:["article",{},["h2","First Example"],["p","Here is a simple codesandbox example to show the usage of Ant Design React."],["iframe",{src:"https://codesandbox.io/embed/antd-reproduction-template-6e93z?autoresize=1&fontsize=14&hidenavigation=1&theme=dark",style:"width: 100%; height: 500px; border: 0px; border-radius: 4px; overflow: hidden;",title:"antd reproduction template",allow:"geolocation; microphone; camera; midi; vr; accelerometer; gyroscope; payment; ambient-light-sensor; encrypted-media; usb",sandbox:"allow-modals allow-forms allow-popups allow-scripts allow-same-origin"}],["h3","1. Create one codesandbox"],["p","Visit ",["a",{title:null,href:"http://u.ant.design/codesandbox-repro"},"http://u.ant.design/codesandbox-repro"]," to create a codesandbox. Don't forget to press the save button."],["h3","2. Using antd component"],["p","Replace the content of ",["code","index.js"]," with the following code. As you can see, there is no difference between antd's components and typical React components."],["p","If you already set up by ",["a",{title:null,href:"https://ant.design/docs/react/use-with-create-react-app#Install-and-Initialization"},"Install and Initialization"],' section of "Use in create-react-app", Please replace the content of /src/index.js'],["pre",{lang:"jsx",highlighted:'<span class="token keyword">import</span> React <span class="token keyword">from</span> <span class="token string">\'react\'</span><span class="token punctuation">;</span>\n<span class="token keyword">import</span> ReactDOM <span class="token keyword">from</span> <span class="token string">\'react-dom\'</span><span class="token punctuation">;</span>\n<span class="token keyword">import</span> <span class="token punctuation">{</span> DatePicker<span class="token punctuation">,</span> message <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">\'antd\'</span><span class="token punctuation">;</span>\n<span class="token keyword">import</span> <span class="token string">\'antd/dist/antd.css\'</span><span class="token punctuation">;</span>\n<span class="token keyword">import</span> <span class="token string">\'./index.css\'</span><span class="token punctuation">;</span>\n\n<span class="token keyword">class</span> <span class="token class-name">App</span> <span class="token keyword">extends</span> <span class="token class-name">React<span class="token punctuation">.</span>Component</span> <span class="token punctuation">{</span>\n  state <span class="token operator">=</span> <span class="token punctuation">{</span>\n    date<span class="token punctuation">:</span> <span class="token keyword">null</span><span class="token punctuation">,</span>\n  <span class="token punctuation">}</span><span class="token punctuation">;</span>\n\n  handleChange <span class="token operator">=</span> date <span class="token operator">=</span><span class="token operator">></span> <span class="token punctuation">{</span>\n    message<span class="token punctuation">.</span><span class="token function">info</span><span class="token punctuation">(</span><span class="token template-string"><span class="token string">`Selected Date: </span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">${</span>date <span class="token operator">?</span> date<span class="token punctuation">.</span><span class="token function">format</span><span class="token punctuation">(</span><span class="token string">\'YYYY-MM-DD\'</span><span class="token punctuation">)</span> <span class="token punctuation">:</span> <span class="token string">\'None\'</span><span class="token interpolation-punctuation punctuation">}</span></span><span class="token string">`</span></span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n    <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">setState</span><span class="token punctuation">(</span><span class="token punctuation">{</span> date <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n  <span class="token punctuation">}</span><span class="token punctuation">;</span>\n\n  <span class="token function">render</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    <span class="token keyword">const</span> <span class="token punctuation">{</span> date <span class="token punctuation">}</span> <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">.</span>state<span class="token punctuation">;</span>\n    <span class="token keyword">return</span> <span class="token punctuation">(</span>\n      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">style</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span><span class="token punctuation">{</span> width<span class="token punctuation">:</span> <span class="token number">400</span><span class="token punctuation">,</span> margin<span class="token punctuation">:</span> <span class="token string">\'100px auto\'</span> <span class="token punctuation">}</span><span class="token punctuation">}</span></span><span class="token punctuation">></span></span>\n        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>DatePicker</span> <span class="token attr-name">onChange</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span><span class="token keyword">this</span><span class="token punctuation">.</span>handleChange<span class="token punctuation">}</span></span> <span class="token punctuation">/></span></span>\n        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">style</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span><span class="token punctuation">{</span> marginTop<span class="token punctuation">:</span> <span class="token number">20</span> <span class="token punctuation">}</span><span class="token punctuation">}</span></span><span class="token punctuation">></span></span>\n          Selected Date<span class="token punctuation">:</span> <span class="token punctuation">{</span>date <span class="token operator">?</span> date<span class="token punctuation">.</span><span class="token function">format</span><span class="token punctuation">(</span><span class="token string">\'YYYY-MM-DD\'</span><span class="token punctuation">)</span> <span class="token punctuation">:</span> <span class="token string">\'None\'</span><span class="token punctuation">}</span>\n        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>\n      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>\n    <span class="token punctuation">)</span><span class="token punctuation">;</span>\n  <span class="token punctuation">}</span>\n<span class="token punctuation">}</span>\n\nReactDOM<span class="token punctuation">.</span><span class="token function">render</span><span class="token punctuation">(</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>App</span> <span class="token punctuation">/></span></span><span class="token punctuation">,</span> document<span class="token punctuation">.</span><span class="token function">getElementById</span><span class="token punctuation">(</span><span class="token string">\'root\'</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>'},["code","import React from 'react';\nimport ReactDOM from 'react-dom';\nimport { DatePicker, message } from 'antd';\nimport 'antd/dist/antd.css';\nimport './index.css';\n\nclass App extends React.Component {\n  state = {\n    date: null,\n  };\n\n  handleChange = date => {\n    message.info(`Selected Date: ${date ? date.format('YYYY-MM-DD') : 'None'}`);\n    this.setState({ date });\n  };\n\n  render() {\n    const { date } = this.state;\n    return (\n      <div style={{ width: 400, margin: '100px auto' }}>\n        <DatePicker onChange={this.handleChange} />\n        <div style={{ marginTop: 20 }}>\n          Selected Date: {date ? date.format('YYYY-MM-DD') : 'None'}\n        </div>\n      </div>\n    );\n  }\n}\n\nReactDOM.render(<App />, document.getElementById('root'));"]],["h3","3. Explore more components"],["p","You can look up components in the side menu like the ",["a",{title:null,href:"/components/alert"},"Alert"]," component. Plenty of examples are provided in the component pages and API documentation."],["p",'Click the "Open in Editor" icon in the first example to open an editor with source code to use out-of-the-box. Now you can import the ',["code","Alert"]," component into the codesandbox:"],["pre",{lang:"diff",highlighted:"<span class=\"token deleted\">- import { DatePicker, message } from 'antd';</span>\n<span class=\"token inserted\">+ import { DatePicker, message, Alert } from 'antd';</span>"},["code","- import { DatePicker, message } from 'antd';\n+ import { DatePicker, message, Alert } from 'antd';"]],["p","Add the following jsx into the ",["code","render"]," function."],["pre",{lang:"diff",highlighted:"  &lt;DatePicker onChange={value => this.handleChange(value)} />\n  &lt;div style={{ marginTop: 20 }}>\n<span class=\"token deleted\">-   Selected Date: {date ? date.format('YYYY-MM-DD') : 'None'}</span>\n<span class=\"token inserted\">+   &lt;Alert message={`Selected Date: ${date ? date.format('YYYY-MM-DD') : 'None'}`} type=\"success\" /></span>\n  &lt;/div>"},["code","  <DatePicker onChange={value => this.handleChange(value)} />\n  <div style={{ marginTop: 20 }}>\n-   Selected Date: {date ? date.format('YYYY-MM-DD') : 'None'}\n+   <Alert message={`Selected Date: ${date ? date.format('YYYY-MM-DD') : 'None'}`} type=\"success\" />\n  </div>"]],["p","Now you can see the result in the preview section."],["p",["img",{width:"420",src:"https://gw.alipayobjects.com/zos/antfincdn/QjCr7oLcpT/c7ce72d2-601e-4130-a33b-456d4652bb2d.png",alt:"codesandbox screenshot"}]],["p","OK! Now you know how to use antd components in a clear way. You are welcome to explore more components in the codesandbox. We also strongly recommend using codesandbox to provide a reproducible demo when reporting a bug."],["h3","4. Next Step"],["p","In the real world you will need a development workflow consisting of ",["code","compile/build/deploy/lint/debug"],". You can find and read articles on the subject or try other scaffolds provided below:"],["ul",["li",["p",["a",{title:null,href:"http://pro.ant.design/"},"Ant Design Pro"]]],["li",["p",["a",{title:null,href:"https://github.com/zuiidea/antd-admin"},"antd-admin"]]],["li",["p",["a",{title:null,href:"https://github.com/d2-projects/d2-admin"},"d2-admin"]]],["li",["p","more scaffolds at ",["a",{title:null,href:"http://scaffold.ant.design/"},"Scaffold Market"]]]],["h2","Compatibility"],["p","Ant Design React supports all modern browsers and IE9+."],["table",["thead",["tr",["th",["a",{title:null,href:"http://godban.github.io/browsers-support-badges/"},["img",{src:"https://raw.githubusercontent.com/alrra/browser-logos/master/src/edge/edge_48x48.png",alt:"IE / Edge",width:"24px",height:"24px"}]],["br"],"IE / Edge"],["th",["a",{title:null,href:"http://godban.github.io/browsers-support-badges/"},["img",{src:"https://raw.githubusercontent.com/alrra/browser-logos/master/src/firefox/firefox_48x48.png",alt:"Firefox",width:"24px",height:"24px"}]],["br"],"Firefox"],["th",["a",{title:null,href:"http://godban.github.io/browsers-support-badges/"},["img",{src:"https://raw.githubusercontent.com/alrra/browser-logos/master/src/chrome/chrome_48x48.png",alt:"Chrome",width:"24px",height:"24px"}]],["br"],"Chrome"],["th",["a",{title:null,href:"http://godban.github.io/browsers-support-badges/"},["img",{src:"https://raw.githubusercontent.com/alrra/browser-logos/master/src/safari/safari_48x48.png",alt:"Safari",width:"24px",height:"24px"}]],["br"],"Safari"],["th",["a",{title:null,href:"http://godban.github.io/browsers-support-badges/"},["img",{src:"https://raw.githubusercontent.com/alrra/browser-logos/master/src/opera/opera_48x48.png",alt:"Opera",width:"24px",height:"24px"}]],["br"],"Opera"],["th",["a",{title:null,href:"http://godban.github.io/browsers-support-badges/"},["img",{src:"https://raw.githubusercontent.com/alrra/browser-logos/master/src/electron/electron_48x48.png",alt:"Electron",width:"24px",height:"24px"}]],["br"],"Electron"]]],["tbody",["tr",["td","IE9, IE10, IE11, Edge"],["td","last 2 versions"],["td","last 2 versions"],["td","last 2 versions"],["td","last 2 versions"],["td","last 2 versions"]]]],["p","We offer very limited support for IE9/10 which means some styles and animations will be mininal for them. Also, we use Flex layout in a few components."],["blockquote",["p","Note: Different than Ant Design, Ant Design Pro supports IE11+."]],["p","Polyfills are needed for IE browsers. We recommend ",["a",{title:null,href:"https://babeljs.io/docs/en/babel-preset-env"},"babel-preset-env"]," for it. You can set ",["code","targets"]," config if you are using ",["a",{title:null,href:"http://umijs.org/"},"umi"],"."],["p","Ant Design 3.0 supports both React 15 and 16 but we strongly suggest React 16 for better performance and fewer bugs."],["h4","IE8 note"],["blockquote",["p","We don't support IE8 after ",["code","antd@2.0"],"."]],["h2","Customized Work Flow"],["p","If you want to customize your work flow, we recommend using ",["a",{title:null,href:"http://webpack.github.io/"},"webpack"]," to build and debug code."],["p","Also, you can use any ",["a",{title:null,href:"https://github.com/enaqx/awesome-react#boilerplates"},"scaffold"]," available in the React ecosystem. If you encounter problems, you can use our ",["a",{title:null,href:"https://github.com/ant-tool/atool-build/blob/master/src/getWebpackCommonConfig.js"},"webpack config"]," and ",["a",{title:null,href:"http://ant-tool.github.io/webpack-config.html"},"modify it"],"."],["p","If you are trying ",["a",{title:null,href:"https://parceljs.org"},"parcel"],", here is ",["a",{title:null,href:"https://github.com/ant-design/parcel-antd"},"a demo repository"],"."],["p","There are some ",["a",{title:null,href:"http://scaffold.ant.design/"},"scaffolds"]," which have already integrated antd, so you can try and start with one of these and even contribute."],["h2","Import on Demand"],["p","If you see logs like in the screenshot below, you might be importing all components by writing ",["code","import { Button } from 'antd';"],". This will affect your app's network performance."],["pre",{lang:null,highlighted:'You are using a whole package of antd<span class="token punctuation">,</span> please use https<span class="token punctuation">:</span><span class="token operator">/</span><span class="token operator">/</span>www<span class="token punctuation">.</span>npmjs<span class="token punctuation">.</span>com<span class="token operator">/</span>package<span class="token operator">/</span>babel<span class="token operator">-</span>plugin<span class="token operator">-</span>import <span class="token keyword">to</span> reduce app bundle size<span class="token punctuation">.</span>'},["code","You are using a whole package of antd, please use https://www.npmjs.com/package/babel-plugin-import to reduce app bundle size."]],["blockquote",["p",["img",{title:null,src:"https://zos.alipayobjects.com/rmsportal/GHIRszVcmjccgZRakJDQ.png",alt:"console warning"}]]],["p","However, we can import individual components on demand:"],["pre",{lang:"jsx",highlighted:'<span class="token keyword">import</span> Button <span class="token keyword">from</span> <span class="token string">\'antd/es/button\'</span><span class="token punctuation">;</span>\n<span class="token keyword">import</span> <span class="token string">\'antd/es/button/style\'</span><span class="token punctuation">;</span> <span class="token comment" spellcheck="true">// or antd/es/button/style/css for css format file</span>'},["code","import Button from 'antd/es/button';\nimport 'antd/es/button/style'; // or antd/es/button/style/css for css format file"]],["blockquote",["p","Note: antd supports ES6 tree shaking, so ",["code","import { Button } from 'antd';"]," will drop the js code you don't use too."]],["p","We strongly recommend using ",["a",{title:null,href:"https://github.com/ant-design/babel-plugin-import"},"babel-plugin-import"],", which can convert the following code to the 'antd/es/xxx' way:"],["pre",{lang:"jsx",highlighted:'<span class="token keyword">import</span> <span class="token punctuation">{</span> Button <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">\'antd\'</span><span class="token punctuation">;</span>'},["code","import { Button } from 'antd';"]],["p","And this plugin can load styles too. Read ",["a",{title:null,href:"https://github.com/ant-design/babel-plugin-import#usage"},"usage"]," for more details."],["blockquote",["p","FYI, babel-plugin-import's ",["code","style"]," option will importing some global reset styles, don't use it if you don't need those styles. You can import styles manually via ",["code","import 'antd/dist/antd.css'"]," and override the global reset styles."]],["h2","Replace momentjs to Day.js"],["p","You can use ",["a",{title:null,href:"https://github.com/ant-design/antd-dayjs-webpack-plugin"},"antd-dayjs-webpack-plugin"]," plugin to replace momentjs to Day.js to reduce bundle size dramatically. You need to update your webpack config file like this:"],["pre",{lang:"js",highlighted:'<span class="token comment" spellcheck="true">// webpack-config.js</span>\n<span class="token keyword">import</span> AntdDayjsWebpackPlugin <span class="token keyword">from</span> <span class="token string">\'antd-dayjs-webpack-plugin\'</span><span class="token punctuation">;</span>\n\nmodule<span class="token punctuation">.</span>exports <span class="token operator">=</span> <span class="token punctuation">{</span>\n  <span class="token comment" spellcheck="true">// ...</span>\n  plugins<span class="token punctuation">:</span> <span class="token punctuation">[</span><span class="token keyword">new</span> <span class="token class-name">AntdDayjsWebpackPlugin</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">]</span><span class="token punctuation">,</span>\n<span class="token punctuation">}</span><span class="token punctuation">;</span>'},["code","// webpack-config.js\nimport AntdDayjsWebpackPlugin from 'antd-dayjs-webpack-plugin';\n\nmodule.exports = {\n  // ...\n  plugins: [new AntdDayjsWebpackPlugin()],\n};"]],["h2","Customization"],["ul",["li",["p",["a",{title:null,href:"/docs/react/customize-theme"},"Customize Theme"]]],["li",["p",["a",{title:null,href:"https://github.com/ant-design/antd-init/tree/master/examples/local-iconfont"},"Local Iconfont"]]]]],meta:{order:1,title:"Getting Started",filename:"docs/react/getting-started.en-US.md"},description:["section",["p","Ant Design React is dedicated to providing a ",["strong","good development experience"]," for programmers. Make sure that you have installed ",["a",{title:null,href:"https://nodejs.org/"},"Node.js"],"(> 8.0.0) correctly."],["p","If you try in local environment, Please refer to ",["a",{title:null,href:"https://ant.design/docs/react/use-with-create-react-app#Install-and-Initialization"},"Install and Initialization"],' section of "Use in create-react-app".'],["blockquote",["p","Before delving into Ant Design React, a good knowledge base of ",["a",{title:null,href:"https://reactjs.org"},"React"]," and ",["a",{title:null,href:"http://babeljs.io/docs/learn-es2015/"},"JavaScript ES2015"]," is needed."]]],toc:["ul",["li",["a",{className:"bisheng-toc-h2",href:"#First-Example",title:"First Example"},"First Example"]],["li",["a",{className:"bisheng-toc-h2",href:"#Compatibility",title:"Compatibility"},"Compatibility"]],["li",["a",{className:"bisheng-toc-h2",href:"#Customized-Work-Flow",title:"Customized Work Flow"},"Customized Work Flow"]],["li",["a",{className:"bisheng-toc-h2",href:"#Import-on-Demand",title:"Import on Demand"},"Import on Demand"]],["li",["a",{className:"bisheng-toc-h2",href:"#Replace-momentjs-to-Day.js",title:"Replace momentjs to Day.js"},"Replace momentjs to Day.js"]],["li",["a",{className:"bisheng-toc-h2",href:"#Customization",title:"Customization"},"Customization"]]]}}}]);