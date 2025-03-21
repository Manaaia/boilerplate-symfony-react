### Tests

This template demonstrate how to write test with Pest in the `tests` folder. You can run the test with the following command:

```bash
task api:test
```

### Linting

This template uses PhpCsFixer for linting. You can run the linter with the following command:

```bash
task api:lint-check
task api:lint-fix
```

To customize the PhpCsFixer rules, you can edit the `.php-cs-fixer.dist.php` file.

### Static analysis

This template uses PhpStan for static analysis. You can run the static analysis with the following command:

```bash
task api:static-analysis
```

To customize the PhpStan rules, you can edit the `phpstan.dist.neon` file.
