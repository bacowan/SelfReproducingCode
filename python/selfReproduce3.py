import inspect
def print_func(func):
    # This is cheating :)
    print("import inspect")
    source_lines, _ = inspect.getsourcelines(func)
    for line in source_lines:
        print(line.replace("\n", ""))
    print("print_func(print_func)")
print_func(print_func)