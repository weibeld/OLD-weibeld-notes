---
title:  Simple Linear Regression
author: Daniel Weibel
date:   27 February 2016
---

- **Given:** $n$ observed data points {$(x_1, y_1), (x_2, y_2), \dots, (x_n, y_n)$}
- **Goal:** predict $Y$ for any value of $X$
    - $X$ = predictor, $Y$ = response
    - "Predict a quantitative response $Y$ based on a predictor variable $X$"
    - "Regress $Y$ onto $X$"
- **Approach:** find a model function $Y \approx \beta_0 + \beta_1 X$ that fits the $n$ data points as well as possible
    - Find appropriate values for $\beta_0$ (intercept) and $\beta_1$ (slope)
    - $\beta_0$ and $\beta_1$ are the *coefficients* of the model
- **Method of least squares:** assess the fitness of a model function to the data points
    - **Residual:** {$e_i = y_i - \hat{y}_i$}, for each of the $n$ data points (assuming some values for $\beta_0$ and $\beta_1$)
        - That is, the difference between the observed $Y$-value at $x_i$ and the predicted $Y$-value at $x_i$ according to the used values for $\beta_0$ and $\beta_1$
    - **RSS (residual sum of squares):** $\text{RSS} = e_1^2 + e_2^2 + \dots + e_n^2$
    - Choose $\beta_0$ and $\beta_1$ to minimise RSS:
        - $\beta_0 = \overline{y} - \beta_1 \overline{x}$
        - $\beta_1 = \frac{\sum_{i=1}^{n}{(x_i - \overline{x})(y_i - \overline{y})}}{\sum_{i=1}^{n}{(x_i - \overline{x})^2}}$
- **Standard errors of $\beta_0$ and $\beta_1$:** assess how close our chosen $\beta_0$ and $\beta_1$ are to the true coefficients $\beta_0^t$ and $\beta_1^t$ of the true model function (population) $Y = \beta_0^t + \beta_1^t X + \epsilon$
    - $\text{SE}(\beta_0) = \sqrt{\text{RSE}^2 \left( \frac{1}{n} + \frac{\overline{x}^2}{\sum_{i=1}^n (x_i - \overline{x})^2} \right)}$
    - $\text{SE}(\beta_1) = \sqrt{\frac{\text{RSE}^2}{\sum_{i=1}^n(x_i - \overline{x})^2}}$
    - $\text{RSE} =  \sqrt{\frac{\text{RSS}}{n-2}}$ (residual standard error, see below)
- **95% confidence intervals of $\beta_0^t$ and $\beta_1^t$:** range of values, such that with 95% probability the true $\beta_0^t$ and $\beta_1^t$ are contained within this range
    - $\beta_i \pm 2\, \text{SE}(\beta_i)$
    - ...that is, the 95% confident interval for $\beta_i^t$ is $\left[ \beta_i - 2\, \text{SE}(\beta_i), \; \beta_i + 2\, \text{SE}(\beta_i) \right]$
- **Relationship hypothesis test:** assess whether $X$ and $Y$ are indeed related ($\beta_1^t \neq 0$)
    - Null hypothesis: $H_0$: There is no relationship between $X$ and $Y$ $\rightarrow$ ($\beta_1^t = 0$)
    - Alternative hypothesis: $H_a$: There is a relationship between $X$ and $Y$ $\rightarrow$ ($\beta_1^t \neq 0$)
    - Try to reject the null hypothesis: is our $\beta_1$ sufficiently far from zero so that the null hypothesis is false with a very high probability? Assessing this depends on the standard error of $\beta_1$
    - **t-statistics:**
        - $t = \frac{\beta_1}{\text{SE}(\beta_1)}$
        - Number of standard errors that $\beta_1$ is away from zero
    - **p-value:**
        - Assuming that the null hypothesis is true ($\beta_1^t = 0$), the $p$-value is the probability that our dataset exhibits the calculated $t$-statistics (or greater)
        - Can be looked up in a normal distribution table (for the given $t$-statistics value)
        - $p < 0.05$: assuming that the null hypothesis is true ($\beta_1^t = 0$), the probability to observe a $t$-statistics like ours is $<$ 5% $\rightarrow$ *reject null hypothesis*
        - $p \geq 0.05$: assuming that the null hypothesis is true ($\beta_1^t = 0$), the probability to observe a $t$-statistics like ours is $\geq$ 5% $\rightarrow$ substantial probability that null hypothesis is true $\rightarrow$ *{cannot reject null hypothesis}*
- **Residual standard error (RSE):** assess accuracy (fit) of the model
    - $\text{RSE} = \sqrt{\frac{\text{RSS}}{n-2}}$
    - Estimate of the standard deviation of $\epsilon$ of the true model $Y = \beta_0^t + \beta_1^t X + \epsilon$
        - Average that the $Y$-values deviate from the regression line
- **R$^2$-statistics**: alternative to RSE whose value is always between 0 and 1
    - $R^2 = \frac{\text{TSS}-\text{RSS}}{\text{TSS}} = 1 - \frac{\text{RSS}}{\text{TSS}}$
        - **TSS (total sum of squares):** $\text{TSS} = \sum_{i=1}^n{(y_i - \overline{y})^2}$
        - **RSS (residual sum of squares):** $\text{RSS} = \sum_{i=1}^n{(y_i - \hat{y_i})^2}$
    - Proportion of the variability of the $Y$-values that is explained by the model
        - 1: model explains variability perfectly $\rightarrow$ good fit
        - 0: model does not explain variability at all $\rightarrow$ bad fit

# References

- [An Introduction to Statistical Learning With Applications in R](http://www.springer.com/de/book/9781461471370), Section 3.1
    
