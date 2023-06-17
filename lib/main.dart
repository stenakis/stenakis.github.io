import 'package:flutter/material.dart';
import 'package:website/blueprint.dart';
import 'package:website/style.dart';

void main() {
  runApp(const MyApp());
}

class MyApp extends StatelessWidget {
  const MyApp({super.key});

  // This widget is the root of your application.
  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      title: 'Flutter Demo',
      theme: ThemeData(
        brightness: Brightness.dark,
        fontFamily: 'Geologica',
        useMaterial3: true,
      ),
      home: const MyHomePage(title: 'Flutter Demo Home Page'),
    );
  }
}

class MyHomePage extends StatefulWidget {
  const MyHomePage({super.key, required this.title});

  final String title;

  @override
  State<MyHomePage> createState() => _MyHomePageState();
}

class _MyHomePageState extends State<MyHomePage> {
  @override
  Widget build(BuildContext context) {
    return Scaffold(
      body: ListView(
        children: const [
          Padding(
            padding: EdgeInsets.symmetric(horizontal: padding),
            child: Text('Hello, I\'m Evans', style: Style.heading),
          ),
          Padding(
            padding: EdgeInsets.symmetric(horizontal: padding),
            child: Text(
                'UI / UX designer, Flutter amateur and leader of OffBalance Creative Team.\nBased in Athens, Greece',
                style: Style.text),
          ),
          SizedBox(height: 70),
          Padding(
            padding: EdgeInsets.symmetric(horizontal: padding),
            child: Text('Mobile Apps', style: Style.header),
          ),
          SizedBox(height: 20),
          BlueBox(image: 'Phase10', text: 'Phase 10 Assistant'),
          BlueBox(image: 'Together', text: 'Coming soon...'),
          SizedBox(height: 70),
          Padding(
            padding: EdgeInsets.symmetric(horizontal: padding),
            child: Text('Rainmeter skins', style: Style.header),
          ),
          SizedBox(height: 20),
          BlueBox(image: 'ClockWorld', text: 'ClockWorld'),
          BlueBox(image: 'Meenimal', text: 'Meenimal'),
          BlueBox(image: 'Sparse', text: 'Sparse'),


        ],
      ),
    );
  }
}
