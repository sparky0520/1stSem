#include <stdio.h>

int main(){
    int age;
    int retire =60;
    printf("Enter your current age: ");
    scanf("%i \n",&age);
    int year_of_career= retire-age;
    printf("Your years of career left are %i",year_of_career);
}