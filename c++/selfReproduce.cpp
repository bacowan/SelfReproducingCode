#include <iostream>
#define x(z) z; std::cout << 'x' << '(' << #z << ')' << std::endl;
#define y(z) std::cout << 'y' << '(' << #z << ')' << std::endl; z;
int main()
{
x(std::cout << "#include <iostream>" << std::endl << "#define x(z) z; std::cout << 'x' << '(' << #z << ')' << std::endl;" << std::endl << "#define y(z) std::cout << 'y' << '(' << #z << ')' << std::endl; z;" << std::endl << "int main()" << std::endl << "{" << std::endl;)
y(std::cout << "}" << std::endl;)
}
