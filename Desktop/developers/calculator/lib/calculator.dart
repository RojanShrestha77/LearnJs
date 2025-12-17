import 'package:flutter/material.dart';
import 'package:math_expressions/math_expressions.dart';

class Calculator extends StatefulWidget {
  const Calculator({super.key});

  @override
  State<Calculator> createState() => _CalculatorState();
}

class _CalculatorState extends State<Calculator> {
  TextEditingController inputController =
      TextEditingController(); // controller for input
  String result = '';

  final List<String> buttons = [
    'C',
    '*',
    '/',
    '<-',
    '1',
    '2',
    '3',
    '+',
    '4',
    '5',
    '6',
    '-',
    '7',
    '8',
    '9',
    '*',
    '%',
    '0',
    '.',
    '=',
  ];

  void buttonPressed(String buttonText) {
    setState(() {
      if (buttonText == 'C') {
        inputController.clear();
        result = '';
      } else if (buttonText == '<-') {
        if (inputController.text.isNotEmpty) {
          inputController.text = inputController.text.substring(
            0,
            inputController.text.length - 1,
          );
        }
      } else if (buttonText == '%') {
        inputController.text += '/100';
      } else if (buttonText == '=') {
        try {
          GrammarParser p = GrammarParser();
          Expression exp = p.parse(inputController.text);
          ContextModel cm = ContextModel();
          result = exp.evaluate(EvaluationType.REAL, cm).toString();
        } catch (e) {
          result = 'Error';
        }
      } else {
        inputController.text += buttonText;
      }
    });
  }

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        title: const Text('Calculator'),
        backgroundColor: Colors.blue,
      ),
      body: Column(
        children: [
          // Display screen
          Expanded(
            child: Container(
              padding: const EdgeInsets.all(20),
              width: double.infinity,
              color: Colors.grey[200],
              child: Column(
                crossAxisAlignment: CrossAxisAlignment.end,
                mainAxisAlignment: MainAxisAlignment.center,
                children: [
                  // TextFormField for input
                  TextFormField(
                    controller: inputController,
                    textAlign: TextAlign.left, // left-aligned
                    textDirection: TextDirection.ltr, // left-to-right
                    style: const TextStyle(fontSize: 32),
                    decoration: const InputDecoration(
                      border: InputBorder.none,
                      contentPadding: EdgeInsets.all(0),
                    ),
                  ),
                  const SizedBox(height: 10),
                  Text(
                    result,
                    style: const TextStyle(fontSize: 24, color: Colors.grey),
                    textDirection: TextDirection.ltr,
                  ),
                ],
              ),
            ),
          ),

          // Buttons grid
          Expanded(
            flex: 5,
            child: Padding(
              padding: const EdgeInsets.all(8.0),
              child: GridView.builder(
                itemCount: buttons.length,
                gridDelegate: const SliverGridDelegateWithFixedCrossAxisCount(
                  crossAxisCount: 4,
                  crossAxisSpacing: 10,
                  mainAxisSpacing: 10,
                ),
                itemBuilder: (context, index) {
                  return ElevatedButton(
                    onPressed: () => buttonPressed(buttons[index]),
                    style: ElevatedButton.styleFrom(
                      backgroundColor: _getButtonColor(buttons[index]),
                      shape: RoundedRectangleBorder(
                        borderRadius: BorderRadius.circular(12),
                      ),
                    ),
                    child: Text(
                      buttons[index],
                      style: const TextStyle(
                        fontSize: 24,
                        fontWeight: FontWeight.bold,
                      ),
                    ),
                  );
                },
              ),
            ),
          ),
        ],
      ),
    );
  }

  Color _getButtonColor(String text) {
    if (text == 'C') return Colors.grey;
    if (text == '<-') return Colors.grey;
    if (text == '=' || text == '/' || text == '*' || text == '-' || text == '+')
      return Colors.grey;
    return Colors.grey.shade300;
  }
}
