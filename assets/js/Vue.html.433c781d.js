"use strict";(self.webpackChunklearn_data=self.webpackChunklearn_data||[]).push([[2302],{6566:(n,e)=>{e.A=(n,e)=>{const a=n.__vccOpts||n;for(const[n,s]of e)a[n]=s;return a}},9370:(n,e,a)=>{a.r(e),a.d(e,{comp:()=>p,data:()=>u});var s=a(5916);const t=(0,s.Lk)("h2",{id:"基础知识",tabindex:"-1"},[(0,s.Lk)("a",{class:"header-anchor",href:"#基础知识"},[(0,s.Lk)("span",null,"基础知识")])],-1),i=(0,s.Lk)("p",null,"mounted 是生命周期函数，自动执行。",-1),l=(0,s.Lk)("p",null,"props 主要用于组件的传值，他的工作就是为了接收外面传过来的数据，与 data、el、ref 是一个级别的配置项。",-1),c={href:"https://cn.vuejs.org/guide/essentials/event-handling.html#event-modifiers",target:"_blank",rel:"noopener noreferrer"},d=(0,s.Fv)('<div class="language-JavaScript line-numbers-mode" data-ext="JavaScript" data-title="JavaScript"><pre class="language-JavaScript"><code>//从 Vue 对象中将 ref, reactive, readonly, toRefs 方法解构出来\nconst { ref, reactive} = Vue;\n\n// setup\nsetup(props, context) {\n  const { h } = Vue;\n  const { attrs, slots, emit } = context;\n  function handleClick() {\n    emit(&#39;change&#39;);\n  }\n  return { handleClick };\n},\n\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="v-model" tabindex="-1"><a class="header-anchor" href="#v-model"><span>v-model</span></a></h2><p>v-model 双向绑定，可以让子组件向父组件传递参数。</p><div class="language-JavaScript line-numbers-mode" data-ext="JavaScript" data-title="JavaScript"><pre class="language-JavaScript"><code>// 传递单个参数 count\n// template\n&lt;counter v-model=&quot;count&quot; /&gt;\n// component:传递参数必须为 `modelValue`，传递方法必须为 `update:modelValue`\napp.component(&#39;counter&#39;, {\n  props: [&#39;modelValue&#39;],\n  methods: {\n    handleClick() {\n      this.$emit(&#39;update:modelValue&#39;, this.modelValue + 3);\n    },\n  },\n  template: `\n  &lt;div @click=&quot;handleClick&quot;&gt;{{modelValue}}&lt;/div&gt;\n`,\n});\n\n// v-model 传递多个参数 count 和 count1\n// template\n&lt;counterx v-model:count=&quot;count&quot; v-model:count1=&quot;count1&quot; /&gt;\n// component\napp.component(&#39;counterx&#39;, {\n  props: [&#39;count&#39;, &#39;count1&#39;],\n  methods: {\n    handleClick2() {\n      this.$emit(&#39;update:count&#39;, this.count + 1);\n    },\n    handleClick3() {\n      this.$emit(&#39;update:count1&#39;, this.count1 + 10);\n    },\n  },\n  template: `\n  &lt;div @click=&quot;handleClick2&quot;&gt;{{count}}&lt;/div&gt;\n  &lt;div @click=&quot;handleClick3&quot;&gt;{{count1}}&lt;/div&gt;\n`,\n});\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="组件命名" tabindex="-1"><a class="header-anchor" href="#组件命名"><span>组件命名</span></a></h2><p>全局组件，建议「小写字母单词，单次间用横线间隔」；局部组件，建议「每个单次都用大写字母开头（驼峰命名）」。按这个规则命名，Vue 才能自动转换。</p><div class="language-JavaScript line-numbers-mode" data-ext="JavaScript" data-title="JavaScript"><pre class="language-JavaScript"><code>// Vue 会自动将 Counter（局部组件）转为 counter（全局组件），将 HelloWorld（局部组件）转为 hello-world（局部组件）。\nconst Counter = {\n  data() {\n    return {\n      count: 1,\n    };\n  },\n  template: `&lt;div @click=&quot;count += 1&quot;&gt;{{count}}&lt;/div&gt;`,\n};\n\nconst HelloWorld = {\n  template: `&lt;div&gt;hello world&lt;/div&gt;`,\n};\n\nconst app = Vue.createApp({\n  // 引入局部组件（需放在引入之前）\n  components: {\n    // 手动定位\n    // counter: Counter,\n    // &#39;hello-world&#39;: HelloWorld,\n    Counter,\n    HelloWorld,\n  },\n  template: `\n  &lt;div&gt;\n    &lt;hello-world /&gt;11111111\n    &lt;counter /&gt;222222\n  &lt;/div&gt;\n`,\n});\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="cdn-使用-vue" tabindex="-1"><a class="header-anchor" href="#cdn-使用-vue"><span>CDN 使用 vue</span></a></h2><div class="language-html line-numbers-mode" data-ext="html" data-title="html"><pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span>\n  <span class="token attr-name">src</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>https://lf6-cdn-tos.bytecdntp.com/cdn/expire-1-M/vue/3.2.31/vue.global.min.js<span class="token punctuation">&quot;</span></span>\n  <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>application/javascript<span class="token punctuation">&quot;</span></span>\n<span class="token punctuation">&gt;</span></span><span class="token script"></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">&gt;</span></span>\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">id</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>app<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>{{ message }}<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>\n\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span><span class="token punctuation">&gt;</span></span><span class="token script"><span class="token language-javascript">\n  <span class="token keyword">const</span> <span class="token punctuation">{</span> createApp <span class="token punctuation">}</span> <span class="token operator">=</span> Vue<span class="token punctuation">;</span>\n\n  <span class="token function">createApp</span><span class="token punctuation">(</span><span class="token punctuation">{</span>\n    <span class="token function">data</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n      <span class="token keyword">return</span> <span class="token punctuation">{</span>\n        <span class="token literal-property property">message</span><span class="token operator">:</span> <span class="token string">&quot;Hello Vue!&quot;</span><span class="token punctuation">,</span>\n      <span class="token punctuation">}</span><span class="token punctuation">;</span>\n    <span class="token punctuation">}</span><span class="token punctuation">,</span>\n  <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">mount</span><span class="token punctuation">(</span><span class="token string">&quot;#app&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">&gt;</span></span>\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>使用 <code>&lt;div v-html=&quot;html&quot;&gt;&lt;/div&gt;</code> 来引入 html 元素，功能类似于 <code>innerHTML</code>，不能加载外部 HTML，实现 <code>&lt;?php echo file_get_contents(&quot;https://docs.manictime.com/win-client/faq&quot;); ?&gt;</code> 类似的功能。</p>',10),o={},p=(0,a(6566).A)(o,[["render",function(n,e){const a=(0,s.g2)("ExternalLinkIcon");return(0,s.uX)(),(0,s.CE)("div",null,[t,i,l,(0,s.Lk)("p",null,[(0,s.eW)("按键、事件都可以加入"),(0,s.Lk)("a",c,[(0,s.eW)("修饰符"),(0,s.bF)(a)]),(0,s.eW)("，简化代码。")]),d])}]]),u=JSON.parse('{"path":"/code/Vue.html","title":"Vue","lang":"zh-CN","frontmatter":{"article":false,"title":"Vue","icon":"fa-brands fa-vuejs","order":2,"description":"基础知识 mounted 是生命周期函数，自动执行。 props 主要用于组件的传值，他的工作就是为了接收外面传过来的数据，与 data、el、ref 是一个级别的配置项。 按键、事件都可以加入修饰符，简化代码。 v-model v-model 双向绑定，可以让子组件向父组件传递参数。 组件命名 全局组件，建议「小写字母单词，单次间用横线间隔」；局部组...","head":[["meta",{"property":"og:url","content":"https://newzone.top/code/Vue.html"}],["meta",{"property":"og:site_name","content":"LearnData 开源笔记"}],["meta",{"property":"og:title","content":"Vue"}],["meta",{"property":"og:description","content":"基础知识 mounted 是生命周期函数，自动执行。 props 主要用于组件的传值，他的工作就是为了接收外面传过来的数据，与 data、el、ref 是一个级别的配置项。 按键、事件都可以加入修饰符，简化代码。 v-model v-model 双向绑定，可以让子组件向父组件传递参数。 组件命名 全局组件，建议「小写字母单词，单次间用横线间隔」；局部组..."}],["meta",{"property":"og:type","content":"website"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-04-23T18:27:28.000Z"}],["meta",{"property":"article:author","content":"LearnData"}],["meta",{"property":"article:modified_time","content":"2024-04-23T18:27:28.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"WebPage\\",\\"name\\":\\"Vue\\",\\"description\\":\\"基础知识 mounted 是生命周期函数，自动执行。 props 主要用于组件的传值，他的工作就是为了接收外面传过来的数据，与 data、el、ref 是一个级别的配置项。 按键、事件都可以加入修饰符，简化代码。 v-model v-model 双向绑定，可以让子组件向父组件传递参数。 组件命名 全局组件，建议「小写字母单词，单次间用横线间隔」；局部组...\\"}"]]},"headers":[{"level":2,"title":"基础知识","slug":"基础知识","link":"#基础知识","children":[]},{"level":2,"title":"v-model","slug":"v-model","link":"#v-model","children":[]},{"level":2,"title":"组件命名","slug":"组件命名","link":"#组件命名","children":[]},{"level":2,"title":"CDN 使用 vue","slug":"cdn-使用-vue","link":"#cdn-使用-vue","children":[]}],"git":{"createdTime":1713896848000,"updatedTime":1713896848000,"contributors":[{"name":"zhengchi","email":"48848880+lzcwycn@users.noreply.github.com","commits":1}]},"readingTime":{"minutes":1.63,"words":490},"filePathRelative":"code/Vue.md","localizedDate":"2024年4月23日","excerpt":"<h2>基础知识</h2>\\n<p>mounted 是生命周期函数，自动执行。</p>\\n<p>props 主要用于组件的传值，他的工作就是为了接收外面传过来的数据，与 data、el、ref 是一个级别的配置项。</p>\\n<p>按键、事件都可以加入<a href=\\"https://cn.vuejs.org/guide/essentials/event-handling.html#event-modifiers\\" target=\\"_blank\\" rel=\\"noopener noreferrer\\">修饰符</a>，简化代码。</p>\\n<div class=\\"language-JavaScript\\" data-ext=\\"JavaScript\\" data-title=\\"JavaScript\\"><pre class=\\"language-JavaScript\\"><code>//从 Vue 对象中将 ref, reactive, readonly, toRefs 方法解构出来\\nconst { ref, reactive} = Vue;\\n\\n// setup\\nsetup(props, context) {\\n  const { h } = Vue;\\n  const { attrs, slots, emit } = context;\\n  function handleClick() {\\n    emit(\'change\');\\n  }\\n  return { handleClick };\\n},\\n\\n</code></pre></div>","autoDesc":true}')}}]);