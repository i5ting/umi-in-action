import { css } from '@emotion/core';

const draculaStyles = css`
  .gatsby-highlight {
    position: relative;

    :before {
      content: url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI1NCIgaGVpZ2h0PSIxNCIgdmlld0JveD0iMCAwIDU0IDE0Ij48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiIHRyYW5zZm9ybT0idHJhbnNsYXRlKDEgMSkiPjxjaXJjbGUgY3g9IjYiIGN5PSI2IiByPSI2IiBmaWxsPSIjRkY1RjU2IiBzdHJva2U9IiNFMDQ0M0UiIHN0cm9rZS13aWR0aD0iLjUiPjwvY2lyY2xlPjxjaXJjbGUgY3g9IjI2IiBjeT0iNiIgcj0iNiIgZmlsbD0iI0ZGQkQyRSIgc3Ryb2tlPSIjREVBMTIzIiBzdHJva2Utd2lkdGg9Ii41Ij48L2NpcmNsZT48Y2lyY2xlIGN4PSI0NiIgY3k9IjYiIHI9IjYiIGZpbGw9IiMyN0M5M0YiIHN0cm9rZT0iIzFBQUIyOSIgc3Ryb2tlLXdpZHRoPSIuNSI+PC9jaXJjbGU+PC9nPjwvc3ZnPg==');
      position: absolute;
      top: 0.5em;
      left: 1.3em;
      z-index: 1;
    }

    pre::-webkit-scrollbar {
      width: 14px;
    }

    pre::-webkit-scrollbar-track {
      background-color: #6272a4;
      border-radius: 0px;
    }

    pre::-webkit-scrollbar-thumb {
      background-color: #bd93f9;
      border-radius: 0px;
    }

    code[class*='language-'],
    pre[class*='language-'] {
      padding: 0;
      color: #ccc;
      background: rgb(30, 31, 42);
      text-shadow: none;
      font-size: 14px;
      font-family: 'Dank Mono', Consolas, Monaco, 'Andale Mono', 'Ubuntu Mono', monospace;
      text-align: left;
      white-space: pre;
      word-spacing: normal;
      word-break: normal;
      word-wrap: normal;
      line-height: 1.5;

      -moz-tab-size: 4;
      -o-tab-size: 4;
      tab-size: 4;

      -webkit-hyphens: none;
      -moz-hyphens: none;
      -ms-hyphens: none;
      hyphens: none;
    }

    *::-moz-selection {
      text-shadow: none;
      background-color: #999;
    }

    *::selection {
      text-shadow: none;
      background-color: #999;
    }

    @media print {
      code[class*='language-'],
      pre[class*='language-'] {
        text-shadow: none;
      }
    }

    /* Code blocks */
    pre[class*='language-'] {
      background: rgba(30, 31, 42, 1) !important;
      border-radius: 0.3em;
      padding: 3.5em 1.5em 1.5em;
      margin: 3em 0;
      overflow: auto;
      height: auto;
      box-shadow: rgba(0, 0, 0, 0.35) 0px 0px 25px;

      :before {
        position: absolute;
        width: 100%;
        top: 0.5em;
        left: 0;
        text-align: center;
      }
    }

    :not(pre) > code[class*='language-'],
    pre[class*='language-'] {
      background: rgba(30, 31, 42, 1);
    }

    pre[class*='language-javascript']:before {
      content: 'js';
    }

    pre[class*='language-js']:before {
      content: 'js';
    }

    pre[class*='language-jsx']:before {
      content: 'jsx';
    }

    pre[class*='language-typescript']:before {
      content: 'ts';
    }

    pre[class*='language-ts']:before {
      content: 'ts';
    }

    pre[class*='language-tsx']:before {
      content: 'tsx';
    }

    pre[class*='language-graphql']:before {
      content: 'GraphQL';
    }

    pre[class*='language-html']:before {
      content: 'html';
    }

    pre[class*='language-css']:before {
      content: 'css';
    }

    pre[class*='language-mdx']:before {
      content: 'mdx';
    }

    pre[class*='language-shell']:before {
      content: 'shell';
    }

    pre[class*='language-sh']:before {
      content: 'sh';
    }

    pre[class*='language-bash']::before {
      content: 'bash';
    }

    pre[class*='language-yaml']:before {
      content: 'yaml';
    }

    pre[class*='language-markdown']:before {
      content: 'md';
    }

    pre[class*='language-json']::before,
    .gatsby-highlight pre[class='language-json5']:before {
      content: 'json';
    }

    pre[class*='language-diff']:before {
      content: 'diff';
    }

    pre[class*='language-text']:before {
      content: 'text';
    }

    pre[class*='language-flow']:before {
      content: 'flow';
    }

    /* Inline code */
    :not(pre) > code[class*='language-'] {
      padding: 4px 7px;
      border-radius: 0.2em;
      white-space: normal;
    }

    .limit-300 {
      height: 300px !important;
    }

    .limit-400 {
      height: 400px !important;
    }

    .limit-500 {
      height: 500px !important;
    }

    .limit-600 {
      height: 600px !important;
    }

    .limit-700 {
      height: 700px !important;
    }

    .limit-800 {
      height: 800px !important;
    }

    .token.comment {
      color: rgba(98, 114, 164, 1);
    }

    .token.prolog {
      color: rgba(207, 207, 194, 1);
    }

    .token.tag {
      color: rgba(220, 104, 170, 1);
    }

    .token.entity {
      color: rgba(139, 233, 253, 1);
    }

    .token.atrule {
      color: rgba(98, 239, 117, 1);
    }

    .token.url {
      color: rgba(102, 217, 239, 1);
    }

    .token.selector {
      color: rgba(207, 207, 194, 1);
    }

    .token.string {
      color: rgba(241, 250, 140, 1);
    }

    .token.property {
      color: rgba(255, 184, 108, 1);
    }

    .token.important {
      color: rgba(255, 121, 198, 1);
      font-weight: bold;
    }

    .token.punctuation {
      color: white;
    }

    .token.number {
      color: rgba(189, 147, 249, 1);
    }

    .token.function {
      color: rgba(80, 250, 123, 1);
    }

    .token.class-name {
      color: rgba(255, 184, 108, 1);
    }

    .token.keyword {
      color: rgba(255, 121, 198, 1);
    }

    .token.boolean {
      color: rgba(255, 184, 108, 1);
    }

    .token.operator {
      color: rgba(139, 233, 253, 1);
    }

    .token.char {
      color: rgba(255, 135, 157, 1);
    }

    .token.regex {
      color: rgba(80, 250, 123, 1);
    }

    .token.variable {
      color: rgba(80, 250, 123, 1);
    }

    .token.constant {
      color: rgba(255, 184, 108, 1);
    }

    .token.symbol {
      color: rgba(255, 184, 108, 1);
    }

    .token.builtin {
      color: rgba(255, 121, 198, 1);
    }

    .token.attr-value {
      color: #7ec699;
    }

    .token.deleted {
      color: #e2777a;
    }

    .token.namespace {
      color: #e2777a;
    }

    .token.bold {
      font-weight: bold;
    }

    .token.italic {
      font-style: italic;
    }

    .token {
      color: #ff79c6;
    }

    .language-cpp .token.string {
      color: #8be9fd;
    }

    .language-c .token.string {
      color: #8be9fd;
    }

    .language-css .token.selector {
      color: rgba(80, 250, 123, 1);
    }

    .language-css .token.property {
      color: rgba(255, 184, 108, 1);
    }

    .language-java span.token.class-name {
      color: #8be9fd;
    }

    .language-java .token.class-name {
      color: #8be9fd;
    }

    .language-markup .token.attr-value {
      color: rgba(102, 217, 239, 1);
    }

    .language-markup .token.tag {
      color: rgba(80, 250, 123, 1);
    }

    .language-objectivec .token.property {
      color: #66d9ef;
    }

    .language-objectivec .token.string {
      color: #50fa7b;
    }

    .language-php .token.boolean {
      color: #8be9fd;
    }

    .language-php .token.function {
      color: #ff79c6;
    }

    .language-php .token.keyword {
      color: #66d9ef;
    }

    .language-ruby .token.symbol {
      color: #8be9fd;
    }

    .language-ruby .token.class-name {
      color: #cfcfc2;
    }

    pre.line-numbers {
      position: relative;
      padding-left: 3.8em;
      counter-reset: linenumber;
    }

    pre.line-numbers > code {
      position: relative;
      white-space: inherit;
    }

    .line-numbers .line-numbers-rows {
      position: absolute;
      pointer-events: none;
      top: 3.5em;
      font-size: 100%;
      left: -3.8em;
      width: 3em !important; /* works for line-numbers below 1000 lines */
      letter-spacing: -1px;

      -webkit-user-select: none;
      -moz-user-select: none;
      -ms-user-select: none;
      user-select: none;
    }

    .line-numbers-rows > span {
      pointer-events: none;
      display: block;
      counter-increment: linenumber;
    }

    .line-numbers-rows > span:before {
      content: counter(linenumber);
      color: rgba(98, 114, 164, 1);
      display: block;
      padding-right: 0.8em;
      text-align: right;
    }

    div.code-toolbar {
      position: relative;
    }

    div.code-toolbar > .toolbar {
      position: absolute;
      top: 0.3em;
      right: 0.2em;
      transition: opacity 0.3s ease-in-out;
      opacity: 0;
    }

    div.code-toolbar:hover > .toolbar {
      opacity: 1;
    }

    div.code-toolbar > .toolbar .toolbar-item {
      display: inline-block;
      padding-right: 20px;
    }

    div.code-toolbar > .toolbar a {
      cursor: pointer;
    }

    div.code-toolbar > .toolbar button {
      background: none;
      border: 0;
      color: inherit;
      font: inherit;
      line-height: normal;
      overflow: visible;
      padding: 0;
      -webkit-user-select: none; /* for button */
      -moz-user-select: none;
      -ms-user-select: none;
    }

    div.code-toolbar > .toolbar a,
    div.code-toolbar > .toolbar button,
    div.code-toolbar > .toolbar span {
      color: #ccc;
      font-size: 0.8em;
      padding: 0.5em;
      background: rgba(98, 114, 164, 1);
      border-radius: 0.5em;
    }

    div.code-toolbar > .toolbar a:hover,
    div.code-toolbar > .toolbar a:focus,
    div.code-toolbar > .toolbar button:hover,
    div.code-toolbar > .toolbar button:focus,
    div.code-toolbar > .toolbar span:hover,
    div.code-toolbar > .toolbar span:focus {
      color: inherit;
      text-decoration: none;
      background-color: var(--verde);
    }
  }
`;

export default draculaStyles;
