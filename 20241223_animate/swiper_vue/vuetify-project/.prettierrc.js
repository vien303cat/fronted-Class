module.exports = {
  semi: false, // 不加分號
  singleQuote: true, // 使用單引號
  trailingComma: 'none', // 省略尾巴逗號
  useTabs: false, // 縮排不使用 tab
  tabWidth: 2, // tab 縮排 2 個字元
  printWidth: 170, // 屬性想折行可以註解起來
  bracketSpacing: true, // 在物件字面值、陣列使用的的括號與文字間加上空格
  arrowParens: 'avoid', // 省略箭頭函式參數一個時的小括號
  quoteProps: 'as-needed',
  vueIndentScriptAndStyle: true, // 縮排 <script>、<style>
  // 測試中
  jsxBracketSameLine: true, // 在 jsx 中把'>' 是否單獨放在一行
  jsxSingleQuote: true, // jsx 使用單引號
  htmlWhitespaceSensitivity: 'ignore', // 忽略
  bracketSameLine: true // 標籤<  >的換行位置
}
