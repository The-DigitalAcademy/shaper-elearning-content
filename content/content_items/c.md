---
title: C#
type: book chapter
description: ''
iframe_tag: '<iframe title="book chapter - C#" style="width: 100%;height: 100vh;" src="https://the-digitalacademy.github.io/shaper-elearning-content/tools/html-page/index.html?collection=content_items&slug=c&field=content"></iframe>'
content:
  code: |-
    <!DOCTYPE html>
    <html lang="en">
    <head>
      <meta charset="UTF-8">
      <title>My page</title>
      <style>
        body { font-family: system-ui, sans-serif; margin: 0; padding: 2rem; line-height: 1.5; }
        h1 { margin-top: 0; }
        button { padding: .5rem 1rem; border: 0; border-radius: 6px; background: #4f46e5; color: #fff; cursor: pointer; }
      </style>
    </head>
    <body>
    <h3 style="color: #111;">C#</h3>
    <p>C# (pronounced as "C sharp") is a general-purpose programming language
      developed by Microsoft. It was created in the early 2000s as part of the .NET
      framework and has become one of the most popular languages for building
      desktop-, web-, and mobile applications on the Windows platform.</p>
    <p>C# is an <em>object-oriented language</em> that is designed for simplicity,
      performance, and scalability.</p>
    <div
      style="border-left: 4px solid #C755FF; background: #f9fafb; padding: 12px 16px; margin: 16px 0;">
      <h5 style="margin-top: 0;">What is Object-Oriented Programming (OOP)?</h5>
      <p style="margin-bottom: 0;">An object-oriented language is a type of
        programming language that arranges <strong>code based on objects</strong>,
        which are like things in the real world with <em>characteristics</em>
        (<strong>attributes</strong>) and <em>actions</em>
        (<strong>methods</strong>).</p>
    </div>
    <p>C# shares many similarities with languages like Java and C++, making it easy
      for developers familiar with those languages to learn and use C#.</p>
    <div style="border-top: 1px solid #e5e7eb; margin: 16px 0;"> </div>
    <h5
      style="text-transform: uppercase; font-size: 0.8rem; letter-spacing: 0.05em; color: #6b7280; margin-bottom: 8px;">
      Key concepts used in object-oriented programming (OOP)</h5>
    <p>The key concepts used in object-oriented programming languages (OOP) such as
      C# are:</p>
    <div
      style="background: #fdfdfe; border: 1px solid #e5e7eb; border-radius: 10px; padding: 14px 16px; margin-bottom: 12px; box-shadow: 0 1px 2px rgba(0,0,0,0.04);">
      <strong
        id="docs-internal-guid-b57e2180-7fff-0e7b-c04e-fd7a304804e8">Classes</strong><br>
      <p style="margin: 6px 0 0;">Classes are like blueprints that define what an
        object will be made of and what it can do.</p>
    </div>
    <div
      style="background: #fdfdfe; border: 1px solid #e5e7eb; border-radius: 10px; padding: 14px 16px; margin-bottom: 12px; box-shadow: 0 1px 2px rgba(0,0,0,0.04);">
      <strong>Objects</strong><br>
      <p style="margin: 6px 0 0;">Objects are actual things created from these
        blueprints, with specific characteristics and abilities.</p>
    </div>
    <div
      style="background: #fdfdfe; border: 1px solid #e5e7eb; border-radius: 10px; padding: 14px 16px; margin-bottom: 12px; box-shadow: 0 1px 2px rgba(0,0,0,0.04);">
      <strong>Encapsulation</strong><br>
      <p style="margin: 6px 0 0;">Encapsulation is like putting data and actions
        together inside a box (class), keeping them safe and private.</p>
    </div>
    <div
      style="background: #fdfdfe; border: 1px solid #e5e7eb; border-radius: 10px; padding: 14px 16px; margin-bottom: 12px; box-shadow: 0 1px 2px rgba(0,0,0,0.04);">
      <strong>Inheritance</strong><br>
      <p style="margin: 6px 0 0;">Inheritance is like passing down traits from a
        parent (superclass) to a child (subclass), helping to reuse code and
        establish relationships.</p>
    </div>
    <div
      style="background: #fdfdfe; border: 1px solid #e5e7eb; border-radius: 10px; padding: 14px 16px; margin-bottom: 12px; box-shadow: 0 1px 2px rgba(0,0,0,0.04);">
      <strong>Polymorphism</strong><br>
      <p style="margin: 6px 0 0;">Polymorphism allows different objects to be
        treated in a similar way, even if they are of different types, making code
        more flexible and adaptable.</p>
    </div>
    <div style="border-top: 1px solid #e5e7eb; margin: 16px 0;"> </div>
    <h5
      style="text-transform: uppercase; font-size: 0.8rem; letter-spacing: 0.05em; color: #6b7280; margin-bottom: 8px;">
      Example of the C# programming language</h5>
    <p>Here is an example of the C# programming language, printing the words “Hello
      World!” on the computer console:</p>
    <pre>using System;

    class Program
    {
        static void Main()
        {
            Console.WriteLine("Hello, World!");
        }
    }
    </pre>
    <p>In this example:</p>
    <ol>
      <li>We include the <code>System</code> <em>namespace</em>, which provides
        access to the <em>Console class</em> for input and output operations.</li>
      <li>We define a <em>class</em> named <code>Program</code>.</li>
      <li>Inside the <code>Program</code> <em>class</em>, we define a
        <code>Main</code> <em>method</em>, which is the entry point of our program.
      </li>
      <li>Within the <code>Main</code> <em>method</em>, we use
        <code>Console.WriteLine</code> to print "Hello, World!" to the console.</li>
    </ol>
    <div style="border-top: 1px solid #e5e7eb; margin: 16px 0;"> </div>
    <h5
      style="text-transform: uppercase; font-size: 0.8rem; letter-spacing: 0.05em; color: #6b7280; margin-bottom: 8px;">
      Advantages of using C#</h5>
    <div
      style="background: #fdfdfe; border: 1px solid #e5e7eb; border-radius: 10px; padding: 14px 16px; margin-bottom: 12px; box-shadow: 0 1px 2px rgba(0,0,0,0.04);">
      <strong>Versatility</strong><br>
      <p style="margin: 6px 0 0;">C# is versatile and can be used for various
        applications such as web development, desktop apps, mobile apps, and games.
      </p>
    </div>
    <div
      style="background: #fdfdfe; border: 1px solid #e5e7eb; border-radius: 10px; padding: 14px 16px; margin-bottom: 12px; box-shadow: 0 1px 2px rgba(0,0,0,0.04);">
      <strong
        id="docs-internal-guid-50917e82-7fff-21ae-d3d1-cda7f3dde2dc">Interoperability</strong><br>
      <p style="margin: 6px 0 0;">C# easily works with other languages and
        technologies in the .NET framework, allowing complex system development.</p>
    </div>
    <div
      style="background: #fdfdfe; border: 1px solid #e5e7eb; border-radius: 10px; padding: 14px 16px; margin-bottom: 12px; box-shadow: 0 1px 2px rgba(0,0,0,0.04);">
      <strong>Strongly Typed</strong><br>
      <p style="margin: 6px 0 0;">C# checks types (that is, the data a variable
        holds) when the programme is compiled to reduce errors and ensure more
        reliable code.</p>
    </div>
    <div
      style="background: #fdfdfe; border: 1px solid #e5e7eb; border-radius: 10px; padding: 14px 16px; margin-bottom: 12px; box-shadow: 0 1px 2px rgba(0,0,0,0.04);">
      <strong
        id="docs-internal-guid-8297b5cf-7fff-702b-f05f-966ea6ee2e09">Object-Oriented</strong><br>
      <p style="margin: 6px 0 0;">Which means that C# can organise code around
        objects which represent real-world entities with properties and behaviours.
        This makes it suitable to develop complex applications that can be scaled to
        different sizes.</p>
    </div>
    <div
      style="background: #fdfdfe; border: 1px solid #e5e7eb; border-radius: 10px; padding: 14px 16px; margin-bottom: 12px; box-shadow: 0 1px 2px rgba(0,0,0,0.04);">
      <strong>Rich Standard Library</strong><br>
      <p style="margin: 6px 0 0;">C# includes a standard library (the .NET
        framework) with built-in functionalities for common tasks such as file input
        and output (I/O), networking, and database access.</p>
    </div>
    <div style="border-top: 1px solid #e5e7eb; margin: 16px 0;"> </div>
    <h5
      style="text-transform: uppercase; font-size: 0.8rem; letter-spacing: 0.05em; color: #6b7280; margin-bottom: 8px;">
      Disadvantages of using C#</h5>
    <div
      style="background: #fdfdfe; border: 1px solid #e5e7eb; border-radius: 10px; padding: 14px 16px; margin-bottom: 12px; box-shadow: 0 1px 2px rgba(0,0,0,0.04);">
      <strong id="docs-internal-guid-b370335a-7fff-9095-6f07-408af32fcceb">Windows
        Dependency</strong><br>
      <p style="margin: 6px 0 0;">C# is linked to Windows, which limits its use
        outside Windows systems.</p>
    </div>
    <div
      style="background: #fdfdfe; border: 1px solid #e5e7eb; border-radius: 10px; padding: 14px 16px; margin-bottom: 12px; box-shadow: 0 1px 2px rgba(0,0,0,0.04);">
      <strong id="docs-internal-guid-5f09e9f0-7fff-bb0d-5c29-94ac979b6ce6">Learning
        Curve</strong><br>
      <p style="margin: 6px 0 0;">C# can be difficult for beginners, especially with
        concepts like memory management and asynchronous programming.</p>
    </div>
    <div
      style="background: #fdfdfe; border: 1px solid #e5e7eb; border-radius: 10px; padding: 14px 16px; margin-bottom: 12px; box-shadow: 0 1px 2px rgba(0,0,0,0.04);">
      <strong
        id="docs-internal-guid-5f5095d1-7fff-f116-b596-8facc27218f7">Performance
        Overhead</strong><br>
      <p style="margin: 6px 0 0;">C# apps may run slower due to features like
        garbage collection, compared to languages like C or C++.</p>
    </div>
    <div
      style="background: #fdfdfe; border: 1px solid #e5e7eb; border-radius: 10px; padding: 14px 16px; margin-bottom: 12px; box-shadow: 0 1px 2px rgba(0,0,0,0.04);">
      <strong id="docs-internal-guid-86cfe23e-7fff-2b83-e222-045bddfb4ce0">Limited
        Mobile Support</strong><br>
      <p style="margin: 6px 0 0;">While C# can be used for mobile applications, it
        may lack certain features or support compared to other languages.</p>
    </div>
    <div
      style="background: #fdfdfe; border: 1px solid #e5e7eb; border-radius: 10px; padding: 14px 16px; margin-bottom: 12px; box-shadow: 0 1px 2px rgba(0,0,0,0.04);">
      <strong id="docs-internal-guid-f25ca1c9-7fff-b386-06f6-41443a718a41">Vendor
        Lock-In</strong><br>
      <p style="margin: 6px 0 0;">Using C# with Microsoft's .NET framework may
        restrict flexibility since it's associated with Microsoft's ecosystem.</p>
    </div>
    <div style="border-top: 1px solid #e5e7eb; margin: 16px 0;"> </div>
    <h5
      style="text-transform: uppercase; font-size: 0.8rem; letter-spacing: 0.05em; color: #6b7280; margin-bottom: 8px;">
      Key Takeaways</h5>
    <p>C# is a versatile, object-oriented programming language developed by
      Microsoft as part of the .NET framework, designed for building scalable and
      high-performance applications. By organising code into classes and objects and
      applying core OOP principles such as encapsulation, inheritance, and
      polymorphism, developers can create structured, reusable, and maintainable
      solutions across a wide range of platforms.</p>
    </body>
    </html>
  lang: html
---
