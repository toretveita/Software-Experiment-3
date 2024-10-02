## Software Technology Experiment Assignment 6

Installation went without issues using local installation with Windows Installer
The code for the project can be found in this repository at: https://github.com/toretveita/Software-Experiment-3/tree/main/gs-messaging-rabbitmq-main/complete

Experiment 2: Hello World

This part of the assignment went mostly without issues. I used java as language and had no trouble following the tutorial. 
The only issue I ran into, but quickly resolved, was correctly adding the files amqp-client-5.16.0.jar, slf4j-api-1.7.36.jar and slf4j-simple-1.7.36.jar to the correct path
and compile the classes. This was manly because the instructions in the guide did not directly work with Windows Powershell terminal so some adjustments had to be made.

Experiment 3: Work Queues and Experiment 4: Topics

After implementing Experiment 2, following the guide for the Work Queues and Publish/Subscribe was straight forward.
Below is a screenshot of two terminals running the EmitLogs and ReceiveLogs classes.


<img width="794" alt="Expass6_Publish_Subscribe" src="https://github.com/user-attachments/assets/55d6c889-9d44-44c8-9fee-45c1c731c1c3">


