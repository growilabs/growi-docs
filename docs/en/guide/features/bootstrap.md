# Decorate text using Bootstrap

You can decorate text using [Bootstrap](https://getbootstrap.jp/docs/5.3/getting-started/introduction/)(Bootstrap 5).

Here are the HTML code and usage examples of Bootstrap that can be used in GROWI. You can use the examples as they are.

## [Badges](https://getbootstrap.jp/docs/5.3/components/badge/)

<img :src="$withBase('/assets/images/en/badge.png')" alt="badge">

### HTML

```html
<span class="badge text-bg-primary">Text</span>  

<span class="badge text-bg-secondary">Text</span>  

<span class="badge text-bg-success">Text</span>  

<span class="badge text-bg-danger">Text</span>  

<span class="badge text-bg-warning">Text</span>  

<span class="badge text-bg-info">Text</span>  

<span class="badge text-bg-light">Text</span>  

<span class="badge text-bg-dark">Text</span>  
```

### Example

- Markdown

  ```markdown
  - Checklist for new employees
    1. Fill out your self-introduction <span class="badge text-bg-danger">Required</span>  
    2. Provide your bank account information <span class="badge text-bg-danger">Required</span>  
    3. Provide your SNS account <span class="badge text-bg-secondary">Optional</span>
  ```

- View
<img :src="$withBase('/assets/images/en/badge_example.png')" alt="example">

## [Alerts](https://getbootstrap.jp/docs/5.3/components/alerts/)

<img :src="$withBase('/assets/images/en/alerts.png')" alt="alerts">

### HTML

```html
<div class="alert alert-primary" role="alert">
  Text
</div>

<div class="alert alert-secondary" role="alert">
  Text
</div>

<div class="alert alert-success" role="alert">
  Text
</div>

<div class="alert alert-danger" role="alert">
  Text
</div>

<div class="alert alert-warning" role="alert">
  Text
</div>

<div class="alert alert-info" role="alert">
  Text
</div>

<div class="alert alert-light" role="alert">
  Text
</div>

<div class="alert alert-dark" role="alert">
  Text
</div>
```

### Example

- Markdown

  ```markdown
  <div class="alert alert-danger" role="alert">
    Please do not edit this information unless you are a team leader or above.
  </div>
  ```

- View
<img :src="$withBase('/assets/images/en/alerts_example.png')" alt="example">


## [Cards](https://getbootstrap.jp/docs/5.3/components/card/)

<img :src="$withBase('/assets/images/en/card.png')" alt="card">

### HTML

```html
<div class="card text-bg-primary mb-3" style="max-width: 50rem;">
  <div class="card-header">Example heading</div>
  <div class="card-body">
    <h5 class="card-title">Example title</h5>
    <p class="card-text">Text</p>
  </div>
</div>

<div class="card text-bg-secondary mb-3" style="max-width: 45rem;">
  <div class="card-header">Example heading</div>
  <div class="card-body">
    <h5 class="card-title">Example title</h5>
    <p class="card-text">Text</p>
  </div>
</div>

<div class="card text-bg-success mb-3" style="max-width: 40rem;">
  <div class="card-header">Example heading</div>
  <div class="card-body">
    <h5 class="card-title">Example title</h5>
    <p class="card-text">Text</p>
  </div>
</div>

<div class="card text-bg-danger mb-3" style="max-width: 35rem;">
  <div class="card-header">Example heading</div>
  <div class="card-body">
    <h5 class="card-title">Example title</h5>
    <p class="card-text">Text</p>
  </div>
</div>

<div class="card text-bg-warning mb-3" style="max-width: 30rem;">
  <div class="card-header">Example heading</div>
  <div class="card-body">
    <h5 class="card-title">Example title</h5>
    <p class="card-text">Text</p>
  </div>
</div>

<div class="card text-bg-info mb-3" style="max-width: 25rem;">
  <div class="card-header">Example heading</div>
  <div class="card-body">
    <h5 class="card-title">Example title</h5>
    <p class="card-text">Text</p>
  </div>
</div>

<div class="card text-bg-light mb-3" style="max-width: 20rem;">
  <div class="card-header">Example heading</div>
  <div class="card-body">
    <h5 class="card-title">Example title</h5>
    <p class="card-text">Text</p>
  </div>
</div>

<div class="card text-bg-dark mb-3" style="max-width: 15rem;">
  <div class="card-header">Example heading</div>
  <div class="card-body">
    <h5 class="card-title">Example title</h5>
    <p class="card-text">Text</p>
  </div>
</div>
```

### Example

- Markdown

  ```markdown
  <div class="card text-bg-warning mb-3" style="max-width: 40rem;">
    <div class="card-header">Column</div>
    <div class="card-body">
      <h5 class="card-title">What is the first curry rice recipe in Japan?</h5>
      <p class="card-text">The first introduction of curry rice cooking method in Japan was in a book called "Seiyo Ryori Shinan" published in 1872 (Meiji 5).</p>
      <p class="card-text">Ingredients included were "green onions, ginger, garlic, butter, shrimp, sea bream, chicken, wheat flour, curry powder," among others.</p>
    </div>
  </div>
  ```

- View
<img :src="$withBase('/assets/images/en/card_example.png')" alt="example">

## [Colors](https://getbootstrap.jp/docs/5.3/utilities/colors/)

### Text colors

<img :src="$withBase('/assets/images/en/text_colors.png')" alt="text_colors">

### HTML

```html
<p class="text-primary">Text</p>
<p class="text-warning">Text</p>
<p class="text-danger">Text</p>
```

### Background colors

<img :src="$withBase('/assets/images/en/background_colors.png')" alt="background_colors">

### HTML

```html
<p class="bg-primary">Text</p>
<p class="bg-warning">Text</p>
<p class="bg-danger">Text</p>
```

### Combining text color and background color

<img :src="$withBase('/assets/images/en/text_background_colors.png')" alt="text_background_colors">

### HTML

```html
<p class="text-danger bg-primary">Text</p>
<p class="text-primary bg-warning">Text</p>
<p class="text-warning bg-danger">Text</p>
```

### Example

- Markdown

  ```
  - <p class="text-danger">Complete the setup of the development environment for the project you are assigned to.</p>
  - <p class="bg-warning">If you have any questions, feel free to ask.</p>
  ```

- View
<img :src="$withBase('/assets/images/en/colors_example.png')" alt="example">

## [Collapse](https://getbootstrap.jp/docs/5.3/components/collapse/)

Using collapse, you can toggle the visibility of content.

<img :src="$withBase('/assets/images/en/collapse.png')" alt="collapse">

### Show content

#### HTML

```html
<a class="btn btn-primary text-white" data-bs-toggle="collapse" href="#collapse-1">
  Show content
</a>

<div class="collapse" id="collapse-1">
  <div class="card card-body">

- Text
      
  </div>
</div>
```

### Hide content

#### HTML

```html
<a class="btn btn-secondary text-white" data-bs-toggle="collapse" href="#collapse-2">
  Hide content
</a>

<div class="collapse show" id="collapse-2">
  <div class="card card-body">

- Text

  </div>
</div>
```

#### Example

- Markdown

  ```markdown
  <a class="btn btn-warning text-white" data-bs-toggle="collapse" href="#collapse-3">
    Check the final ranking!
  </a>

  <div class="collapse" id="collapse-3">
    <div class="card card-body">

  ##### The winner is **B** !!

  | Members | Points | Rank |
  | ------ | ---- | ---- |
  | A | 80pt | 2nd |
  | B | 95pt | 1st |
  | C | 70pt | 3rd |
        
    </div>
  </div>
  ```

- View
<img :src="$withBase('/assets/images/en/collapse_example.png')" alt="collapse">

## Official documentation

- [Badge](https://getbootstrap.jp/docs/5.3/components/badge/)
- [Alerts](https://getbootstrap.jp/docs/5.3/components/alerts/)
- [Card](https://getbootstrap.jp/docs/5.3/components/card/)
- [Colors](https://getbootstrap.jp/docs/5.3/utilities/colors/)
- [Collapse](https://getbootstrap.jp/docs/5.3/components/collapse/)
