#include<stdio.h>
#include<stdlib.h>
#include<string.h>
int* units(char morn[][5],char even[][5],char subject[][5],int s,int *u);
int main()
{
    int days;
    puts("Enter the number of days left for exam : \n");
    scanf("%d",&days);
    puts("Enter the subject codes..\nFor reference: CO = Computer Organization, DLD: Digital Logic Design...etc.\n");
    char subject[5][5]; int i,j,k=0,c[2];
    for(i=0;i<5;i++)
    {
       printf("\nEnter Subject #%d: ",i+1);
       scanf(" %[^\n]",subject[i]);
    }
    puts("\nEnter the rating of the subjects.\nFor reference: 1 = Easiest and 10 = Hardest.\n");
    int rate[5],slot[5],s=(days-5)*2;
    for(i=0;i<5;i++)
    {
        printf("\nRating for %s:\t",subject[i]);
        scanf("%d",&rate[i]);
    }
    memset(slot,0,sizeof(slot));
    while(s>4)
    {
        c[0]=s;
        for(i=0;i<5;i++)
        {
            slot[i]+=(rate[i]*(s))/50;
        }
        s=0;
        for(i=0;i<5;i++)
        {
            s+=slot[i];
        }
        s=((days-5)*2)-s;
        c[1]=s;
        if(c[1]-c[0]==0)
            break;
    }
    for(i=0;i<5;i++)
    {
        if(s>0)
        {
            slot[i]+=1;
            s--;
        }
    }
    puts("\n\nSUBJECT\tSLOTS");
    for(i=0;i<5;i++)
        {
            printf("\n%s\t%d\n",subject[i],slot[i]);
        }
    s=(days-5)*2; char tt[s][5]; int flag[s],u[s]; memset(flag,0,sizeof(flag));
    for(i=0;i<5;i++)
    {
        k=0;
        while(slot[i]!=0)
        {
            if(flag[k%s]!=-1)
            {
                strcpy(tt[k%s],subject[i]);
                flag[k%s]=-1;
                slot[i]-=1;
                k+=5;
            }
            else if(flag[k%s]==-1)
            {
                k++;
            }
        }

    }
    char morn[s/2][5],even[s/2][5]; int mslot[s/2],eslot[s/2];
    for(i=0;i<s/2;i++)
    {
        strcpy(morn[i],tt[i]);
        strcpy(even[i],tt[(s/2)+i]);
    }
    int* ptr = units(morn,even,subject,s,u);
    for(i=0,j=0,k=1;j<s/2;i+=2,j++,k+=2)
    {
        mslot[j]=ptr[i],eslot[j]=ptr[k];
    }
    puts("\nDAY #\tMORNING\tUNIT #\tEVENING\tUNIT #\n");
    for(i=0;i<s/2;i++)
    {
        printf("%d\t%s\t%d\t%s\t%d\n",i+1,morn[i],mslot[i],even[i],eslot[i]);
    }
    return 0;
}
int* units(char morn[][5],char even[][5],char subject[][5],int s,int *u)
{
    int i=0,j=0,k=0; char all[s][5],temp[5];
    for(i=0,j=0,k=1;j<s/2;i+=2,j++,k+=2)
    {
        strcpy(all[i],morn[j]),strcpy(all[k],even[j]);
    }

    memset(u,0,sizeof(u));
    for(i=0;i<5;i++)
    {
        strcpy(temp,subject[i]);
        k=1;
        for(j=0;j<s;j++)
        {
            if(strcmp(all[j],temp)==0)
            {
                if(k>5)
                k=1;
                u[j]=k;
                k++;
            }
        }
    }
    return u;
}
