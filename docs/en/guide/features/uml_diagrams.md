# Create UML Diagrams

GROWI can use [PlantUML](https://plantuml.com/) to draw UML diagrams.

Refer to [Real World UML](https://real-world-plantuml.com/) for some examples on how to use PlantUML.

<img :src="$withBase('/assets/images/en/uml_diagrams.png')" alt="uml_diagrams">

### Example:

~~~~
``` plantuml
class RemarkPlugin {
    + transform(syntaxTree: AST): AST
}
```
~~~~

or

~~~~
``` plantuml
@startuml
class RemarkPlugin {
    + transform(syntaxTree: AST): AST
}
@enduml
```
~~~~
