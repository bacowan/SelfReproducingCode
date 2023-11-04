str = '''str = "str = " + "".join(["'" for _ in range(3)]) + str + "".join(["'" for _ in range(3)]) + """
exec(str)"""
print(str)'''
exec(str)
