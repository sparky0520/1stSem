#include <iostream>
using namespace std;

// #include <iostream>
//using namespace std;

// int add(int a, int b){
//     int sum = a+b;
//     return sum;
// }
int main(){
    // int c,d,sum;
    // c=12;
    // d=23;
    // cout<<"The sum of the two numbers is "<< add(c,d);
    
    // int arr[] ={0,1,2,3,4,5};
    // cout<<"The fourth index element of this array is "<<arr[5];

    // int students[6];
    // int marks[6];
    // for (int i=1 ; i<=6; i++){
    //     students[i]=i;
    //     cout<<"Enter marks for the "<<i<<"th student"<<endl;
    //     cin>>marks[i]; 
    // }
    // cout<<marks[5];
    
    // int array[3][4] = {
    //     {1,2,3,4},
    //     {5,6,7,8},
    //     {9,10,11,12}
    // };
    // for (int i=0; i<3; i++){
    //     for (int j=0; j<4; j++){
    //         cout<<"Element at "<<i<<","<<j<<" is "<<array[i][j]<<endl;
    //     }
    // }
    // cout<<endl;
    // cout<<"The loop has ended"<<endl;

    float a=75.55;
    float* pointer;
    pointer =&a;
    cout<<"The location is "<<pointer<<endl;
    cout<<"The value is "<<*pointer<<endl;
}