---
title: 'Activity: Hello, World! Your First Steps'
type: page
description: 'In this activity, we’ll take our very first steps into the world of programming by writing one of the simplest yet most iconic programs: "Hello, World!"'
iframe_tag: '<iframe title="page - Activity: Hello, World! Your First Steps" src="https://the-digitalacademy.github.io/shaper-elearning-content/tools/html-page/index.html?collection=content_items&slug=activity-hello-world-your-first-steps&field=content"></iframe>'
content:
  code: |-
    <!DOCTYPE html>
    <html lang="en">
    <head>
      <meta charset="UTF-8">
      <title>My page</title>
      <style>
        body {
          font-family: system-ui, sans-serif;
          margin: 0;
          padding: 2rem;
          line-height: 1.5;
        }
        h1 {
          margin-top: 0;
        }
        button {
          padding: .5rem 1rem;
          border: 0;
          border-radius: 6px;
          background: #4f46e5;
          color: #fff;
          cursor: pointer;
        }
      </style>
    </head>
    <body>
      <p dir="ltr" style="text-align: left;">
        We are going to take your very first
        steps into the world of programming by writing one of the simplest yet most
        iconic programs: <strong data-start="439" data-end="458">"Hello,
          World!". </strong>This program might seem small, but it is a rite of passage
        for programmers — it teaches you how to run code, see output, and understand
        basic syntax in different languages.
      </p>
      <p dir="ltr" style="text-align: left;">
        <span
          style="font-size: 1rem; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, 'Noto Sans', 'Liberation Sans', sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol', 'Noto Color Emoji';">You’re
          going to write a Hello, World! program in four programming languages using
          Programiz’s online compilers. No setup required!</span>
      </p>
      <div style="border-top: 1px solid #e5e7eb; margin: 16px 0;">
      </div>
      <h5
        style="text-transform: uppercase; font-size: 0.8rem; letter-spacing: 0.05em; color: #6b7280; margin-bottom: 8px;">
        Activity Instructions</h5>
      <h5>Instructions</h5>
      <ol>
        <li>For each language listed below, <strong>open each link</strong> in a new
          tab.</li>
        <li><strong>Clear</strong> the editor.</li>
        <li><strong>Copy the code</strong> for "Hello, World!" in that language and
          type it in the editor.</li>
        <li><strong>Click Run</strong> to see the output</li>
        <li>Observe the differences in syntax between the languages</li>
      </ol>
      <div style="border-top: 1px solid #e5e7eb; margin: 16px 0;">
      </div>
      <h5
        style="text-transform: uppercase; font-size: 0.8rem; letter-spacing: 0.05em; color: #6b7280; margin-bottom: 8px;">
        Python</h5>
      <p>
        <a title="Python Online Compiler"
          href="https://www.programiz.com/python-programming/online-compiler/"
          target="_blank" rel="noopener">Python Online Compiler</a>
      </p>
      <pre><code class="hljs swift"><span class="hljs-built_in"><span class="hljs-built_in"><span class="hljs-built_in">print</span></span></span>(<span class="hljs-string"><span class="hljs-string"><span class="hljs-string">"Hello, World!"</span></span></span>)</code></pre>
      <div style="border-top: 1px solid #e5e7eb; margin: 16px 0;">
      </div>
      <h5
        style="text-transform: uppercase; font-size: 0.8rem; letter-spacing: 0.05em; color: #6b7280; margin-bottom: 8px;">
        C++</h5>
      <p>
        <a title="C++ Online Compiler"
          href="https://www.programiz.com/cpp-programming/online-compiler/"
          target="_blank" rel="noopener">C++ Online Compiler</a>
      </p>
      <pre><code class="hljs cpp"><span class="hljs-meta"><span class="hljs-meta">#</span><span class="hljs-meta-keyword"><span class="hljs-meta"><span class="hljs-meta-keyword">include</span></span></span> <span class="hljs-meta-string"><span class="hljs-meta"><span class="hljs-meta-string">&lt;iostream&gt;</span></span></span></span>

        <span class="hljs-function"><span class="hljs-keyword"><span class="hljs-function"><span class="hljs-keyword">int</span></span></span> <span class="hljs-title"><span class="hljs-function"><span class="hljs-title">main</span></span></span><span class="hljs-params"><span class="hljs-function"><span class="hljs-params">()</span></span></span> </span>{
        <span class="hljs-built_in"><span class="hljs-built_in">std</span></span>::<span class="hljs-built_in"><span class="hljs-built_in">cout</span></span> &lt;&lt; <span class="hljs-string"><span class="hljs-string">"Hello, World!"</span></span>;
        <span class="hljs-keyword"><span class="hljs-keyword">return</span></span> <span class="hljs-number"><span class="hljs-number">0</span></span>;
        }</code></pre>
      <div style="border-top: 1px solid #e5e7eb; margin: 16px 0;">
      </div>
      <h5
        style="text-transform: uppercase; font-size: 0.8rem; letter-spacing: 0.05em; color: #6b7280; margin-bottom: 8px;">
        Java</h5>
      <p>
        <a title="Java Online Compiler"
          href="https://www.programiz.com/java-programming/online-compiler/"
          target="_blank" rel="noopener">Java Online Compiler</a>
      </p>
      <pre><code class="hljs arduino"><span class="hljs-class"><span class="hljs-keyword"><span class="hljs-class"><span class="hljs-keyword">class</span></span></span></span> <span class="hljs-class"><span class="hljs-title"><span class="hljs-class"><span class="hljs-title">Main</span></span></span></span> <span class="hljs-class"><span class="hljs-class">{</span></span>
        <span class="hljs-function"><span class="hljs-keyword"><span class="hljs-function"><span class="hljs-keyword">public</span></span></span></span> <span class="hljs-function"><span class="hljs-keyword"><span class="hljs-function"><span class="hljs-keyword">static</span></span></span></span><span class="hljs-function"> <span class="hljs-keyword"><span class="hljs-function"><span class="hljs-keyword">void</span></span></span> <span class="hljs-title"><span class="hljs-function"><span class="hljs-title">main</span></span></span><span class="hljs-params"><span class="hljs-function"><span class="hljs-params">(</span></span></span></span><span class="hljs-function"><span class="hljs-params"><span class="hljs-keyword"><span class="hljs-function"><span class="hljs-params"><span class="hljs-keyword">String</span></span></span></span></span></span><span class="hljs-function"><span class="hljs-params"><span class="hljs-function"><span class="hljs-params">[] args)</span></span></span> </span>{
        System.out.<span class="hljs-built_in"><span class="hljs-built_in">println</span></span>(<span class="hljs-string"><span class="hljs-string">"Hello, World!"</span></span>);
        }
        }</code></pre>
      <div style="border-top: 1px solid #e5e7eb; margin: 16px 0;">
      </div>
      <h5
        style="text-transform: uppercase; font-size: 0.8rem; letter-spacing: 0.05em; color: #6b7280; margin-bottom: 8px;">
        Javascript</h5>
      <p>
        <a title="JavaScript Online Compiler"
          href="https://www.programiz.com/javascript/online-compiler/" target="_blank"
          rel="noopener">JavaScript Online Compiler</a>
      </p>
      <pre><code class="hljs less"><span class="hljs-selector-tag"><span class="hljs-selector-tag">console</span></span><span class="hljs-selector-class"><span class="hljs-selector-class">.log</span></span>(<span class="hljs-string"><span class="hljs-string">"Hello, World!"</span></span>);</code></pre>
      <p>
        <span
          style="font-size: 1rem; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, 'Noto Sans', 'Liberation Sans', sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol', 'Noto Color Emoji';">After
          running each program in the different programming languages, you will have
          noticed that each of them <strong>produces the same output</strong>. The
          syntax (or writing rules) is different for each language. Some languages may
          feel easier to write than others, but the goal of code remains the same. As
          you progress on your journey as a programmer, you'll learn why some
          languages are chosen over others.</span>
      </p>
    </body>
    </html>
  lang: html
---
