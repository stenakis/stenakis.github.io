import 'package:flutter/material.dart';
import 'package:website/style.dart';

class BlueBox extends StatefulWidget {
  const BlueBox({super.key, required this.image, required this.text});
  final String image;
  final String text;

  @override
  State<BlueBox> createState() => _BlueBoxState();
}

class _BlueBoxState extends State<BlueBox> {
  bool _visible = false;

  @override
  Widget build(BuildContext context) {
    return MouseRegion(
      onEnter: (event) {
        setState(() {
          _visible = true;
        });
      },
      onExit: (event) {
        setState(() {
          _visible = false;
        });
      },
      child: Stack(
        alignment: Alignment.centerLeft,
        children: [
          AnimatedOpacity(
            opacity: _visible ? 1.0 : 0.0,
            duration: const Duration(milliseconds: 200),
            child: SizedBox(
              width: MediaQuery.of(context).size.width,
              height: 200,
              child: Opacity(
                opacity: 0.75,
                child: Image.asset(
                  'assets/backgrounds/${widget.image}.jpg',
                  fit: BoxFit.cover,
                ),
              ),
            ),
          ),
          Padding(
            padding: EdgeInsets.symmetric(horizontal: padding),
            child: Text(widget.text, style: Style.title),
          ),
        ],
      ),
    );
  }
}
