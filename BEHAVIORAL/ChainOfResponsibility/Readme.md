#Concepts:
1. Decoupling of sender and receiver
(Разделение//Устранение зависимости между отправителем и получателем)
2. Receiver contains reference to next receiver
3. Promotes loose coupling 
(Способствует свободной связи)

Examples:
java.util.logging.Logger#log()
javax.servlet.Filter#doFilter()
Spring Security Filter Chain

#Design
1. Chain of receiver objects
2. Handler is Interface based
3. ConcreteHandler for each implementation
4. Each Handler has a reference to the next
5. Handler, ConcreteHandler

#UML
  ![](ChainOfResponsibility.jpg)  
  
#UML v.2
   ![](CoR-draw-io.png)
  
#Pitfalls
1. Handling/Handler guarantee (нет гарантии что кто-то обработает запрос)
2. Runtime configuration risk (что-то может не отработать, не всё было протестировано)
3. Chain length/performance issues (!Редко, но возможно. Цепочка может быть достаточно большой и производительность начнет падать)

#Разница с командой

| CoR | README |
| ------ | ------ |
| Handle is unique | Command also unique |
| Successor | Encapsulates function |
| Can utilize the Command | Reversible or Trackable in nature |


