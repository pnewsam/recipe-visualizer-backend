# Recipe Visualizer Backend

## ERD

```mermaid
erDiagram
  recipes ||--|{ recipe_ingredients: onetomany
  ingredients ||--|{ recipe_ingredients: onetomany
  ingredient_categories ||--|{ ingredients: onetomany
  recipes ||--|{ required_tools: onetomany
  required_tools }|--|{ tools : manytomany

  recipes {
    PK id
    varchar name
    integer portion_yield
    integer cooking_time_in_minutes
    text instructions
  }
  recipe_ingredients {
    PK id
    FK recipe_id
    FK ingredient_id
    varchar name
  }
  ingredients {
    PK id
    FK ingredient_category_id
    varchar name
  }
  ingredient_categories {
    PK id
    varchar name
  }
  tools {
    PK id
    varchar name
  }
  required_tools {
    PK id
    FK recipe_id
    FK tool_id
  }
```
