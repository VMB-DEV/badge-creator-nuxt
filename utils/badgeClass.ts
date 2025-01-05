import {String, ResultType, StyleType, LogoType} from "~/utils/badgeType";
import config from "tailwindcss/defaultConfig";

export interface IBadge {
    b64Logo: string;
    classicLogo: string;
    labels: String[];
    labelsNumber: number;
    leftPartBGColor: string;
    logoFGColor: string;
    logoType: LogoType;
    resultType: ResultType;
    rightPartBGColor: string;
    style: StyleType;
    url: string;
    result: string;
}

export class BadgeClass implements IBadge {
    public style: StyleType;
    public logoType: LogoType;
    public classicLogo: string;
    public b64Logo: string;
    public labelsNumber: number;
    public labels: String[];
    public logoFGColor: string;
    public leftPartBGColor: string;
    public rightPartBGColor: string;
    public resultType: ResultType;
    public url: string;

    static readonly DEFAULT_VALUES: IBadge = {
        rightPartBGColor: "A81D33",
        leftPartBGColor: "101010",
        logoFGColor: "A81D33",
        labelsNumber: 2,
        // b64Logo: "PHN2ZyByb2xlPSJpbWciIHZpZXdCb3g9IjAgMCAyNCAyNCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48dGl0bGU",
        b64Logo: "PHN2ZyByb2xlPSJpbWciIHZpZXdCb3g9IjAgMCAyNCAyNCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4gPHRpdGxlPkRlYmlhbjwvdGl0bGU+IDxwYXRoIGZpbGw9IiNBODFEMzMiIGQ9Ik0xMy44OCAxMi42ODVjLS40IDAgLjA4LjIuNjAxLjI4LjE0LS4xLjI3LS4yMi4zOS0uMzNhMy4wMDEgMy4wMDEgMCAwMS0uOTkuMDVtMi4xNC0uNTNjLjIzLS4zMy40LS42OS40Ny0xLjA2LS4wNi4yNy0uMi41LS4zMy43My0uNzUuNDctLjA3LS4yNyAwLS41Ni0uOCAxLjAxLS4xMS42LS4xNC44OW0uNzgxLTIuMDVjLjA1LS43MjEtLjE0LS41MDEtLjItLjIyMS4wNy4wNC4xMy41LjIuMjJNMTIuMzguMzFjLjIuMDQuNDUuMDcuNDIuMTIuMjMtLjA1LjI4LS4xLS40My0uMTJtLjQzLjEybC0uMTUuMDMuMTQtLjAxVi40M202LjYzMyA5Ljk0NGMuMDIuNjQtLjIuOTUtLjM4IDEuNWwtLjM1LjE4MWMtLjI4LjU0LjAzLjM1LS4xNy43OC0uNDQuMzktMS4zNCAxLjIyLTEuNjIgMS4zMDEtLjIwMSAwIC4xNC0uMjUuMTktLjM0LS41OTEuNC0uNDgxLjYtMS4zNzEuODVsLS4wMy0uMDZjLTIuMjIxIDEuMDQtNS4zMDMtMS4wMi01LjI1My0zLjg0Mi0uMDMuMTctLjA3LjEzLS4xMi4yYTMuNTUxIDMuNTUyIDAgMDEyLjAwMS0zLjUwMSAzLjM2MSAzLjM2MiAwIDAxMy43MzIuNDggMy4zNDEgMy4zNDIgMCAwMC0yLjcyMS0xLjNjLTEuMTguMDEtMi4yODEuNzYtMi42NTEgMS41Ny0uNi4zOC0uNjcgMS40Ny0uOTMgMS42NjEtLjM2MSAyLjYwMS42NiAzLjcyMiAyLjM4IDUuMDQyLjI3LjE5LjA4LjIxLjEyLjM1YTQuNzAyIDQuNzAyIDAgMDEtMS41My0xLjE2Yy4yMy4zMy40Ny42Ni44LjkxLS41NS0uMTgtMS4yNy0xLjMtMS40OC0xLjM1LjkzIDEuNjYgMy43OCAyLjkyMSA1LjI2MSAyLjNhNi4yMDMgNi4yMDMgMCAwMS0yLjMzLS4yOGMtLjMzLS4xNi0uNzctLjUxLS43LS41N2E1LjgwMiA1LjgwMyAwIDAwNS45MDItLjg0Yy40NC0uMzUuOTMtLjk0IDEuMDctLjk1LS4yLjMyLjA0LjE2LS4xMi40NC40NC0uNzItLjItLjMuNDYtMS4yNGwuMjQuMzNjLS4wOS0uNi43NC0xLjMyMS42Ni0yLjI2Mi4xOS0uMy4yLjMgMCAuOTcuMjktLjc0LjA4LS44NS4xNS0xLjQ2LjA4LjIuMTguNDIuMjMuNjMtLjE4LS43LjItMS4yLjI4LTEuNi0uMDktLjA1LS4yOC4zLS4zMi0uNTMgMC0uMzcuMS0uMi4xNC0uMjgtLjA4LS4wNS0uMjYtLjMyLS4zOC0uODYxLjA4LS4xMy4yMi4zMy4zNC4zNC0uMDgtLjQyLS4yLS43NS0uMi0xLjA4LS4zNC0uNjgtLjEyLjEtLjQtLjMtLjM0LTEuMDkxLjMtLjI1LjM0LS43NC41NC43Ny44NCAxLjk2Ljk4MSAyLjQ2LS4xLS42LS4yOC0xLjItLjQ5LTEuNzYuMTYuMDctLjI2LTEuMjQxLjIxLS4zN0E3LjgyMyA3LjgyNCAwIDAwMTcuNzAyIDEuNmMuMTguMTcuNDIuMzkuMzMuNDItLjc1LS40NS0uNjItLjQ4LS43My0uNjctLjYxLS4yNS0uNjUuMDItMS4wNiAwQzE1LjA4Mi43MyAxNC44NjIuOCAxMy44LjRsLjA1LjIzYy0uNzctLjI1LS45LjEtMS43MyAwLS4wNS0uMDQuMjctLjE0LjUzLS4xOC0uNzQxLjEtLjcwMS0uMTQtMS40MzEuMDMuMTctLjEzLjM2LS4yMS41NS0uMzItLjYuMDQtMS40NC4zNS0xLjE4LjA3QzkuNi42OCA3Ljg0NyAxLjMgNi44NjcgMi4yMkw2LjgzOCAyYy0uNDUuNTQtMS45NiAxLjYxMS0yLjA4IDIuMzExbC0uMTMxLjAzYy0uMjMuNC0uMzguODUtLjU3IDEuMjYxLS4zLjUyLS40NS4yLS40LjI4LS42IDEuMjItLjkgMi4yNTEtMS4xNiAzLjEwMi4xOC4yNyAwIDEuNjUuMDcgMi43Ni0uMyA1LjQ2MyAzLjg0IDEwLjc3NiA4LjM2MyAxMi4wMDYuNjcuMjMgMS42NS4yMyAyLjQ5LjI1LS45OS0uMjgtMS4xMi0uMTUtMi4wOC0uNDktLjctLjMyLS44NS0uNy0xLjM0LTEuMTNsLjIuMzVjLS45NzEtLjM0LS41Ny0uNDItMS4zNjEtLjY3bC4yMS0uMjdjLS4zMS0uMDMtLjgzLS41My0uOTctLjgxbC0uMzQuMDFjLS40MS0uNTAxLS42My0uODcxLS42MS0xLjE2MWwtLjExMS4yYy0uMTMtLjIxLTEuNTItMS45MDEtLjgtMS41MTEtLjEzLS4xMi0uMzEtLjItLjUtLjU1bC4xNC0uMTdjLS4zNS0uNDQtLjY0LTEuMDItLjYyLTEuMi4yLjI0LjMyLjMuNDUuMzMtLjg4LTIuMTcyLS45My0uMTItMS42MDEtMi4yMDJsLjE1LS4wMmMtLjEtLjE2LS4xOC0uMzQtLjI2LS41MWwuMDYtLjZjLS42My0uNzQtLjE4LTMuMTAyLS4wOS00LjQwMi4wNy0uNTQuNTMtMS4xLjg4LTEuOTgxbC0uMjEtLjA0Yy40LS43MSAyLjM0MS0yLjg3MiAzLjI0MS0yLjc2MS40My0uNTUtLjA5IDAtLjE4LS4xNC45Ni0uOTkxIDEuMjYtLjcgMS45MDEtLjg4LjctLjQwMS0uNi4xNi0uMjctLjE1MSAxLjItLjMuODUtLjcgMi40MjEtLjg1LjE2LjEtLjM5LjE0LS41Mi4yNiAxLS40OSAzLjE1MS0uMzcgNC41NjIuMjcgMS42My43NyAzLjQ2MSAzLjAxMSAzLjUzMSA1LjEzMmwuMDguMDJjLS4wNC44NS4xMyAxLjgyMS0uMTcgMi43MTFsLjItLjQyTTkuNTQgMTMuMjM2bC0uMDUuMjhjLjI2LjM1LjQ3LjczLjggMS4wMS0uMjQtLjQ3LS40Mi0uNjYtLjc1LTEuM20uNjItLjAyYy0uMTQtLjE1LS4yMi0uMzQtLjMxLS41Mi4wOC4zMi4yNi42LjQzLjg4bC0uMTItLjM2bTEwLjk0NS0yLjM4MmwtLjA3LjE1Yy0uMS43Ni0uMzQgMS41MTEtLjY5IDIuMjEyLjQtLjczLjY1LTEuNTQxLjc1LTIuMzYyTTEyLjQ1LjEyYy4yNy0uMS42Ni0uMDUuOTUtLjEyLS4zNy4wMy0uNzQuMDUtMS4xLjFsLjE1LjAyTTMuMDA2IDUuMTQyYy4wNy41Ny0uNDMuOC4xMS40Mi4zLS42Ni0uMTEtLjE4LS4xLS40Mm0tLjY0IDIuNjYxYy4xMi0uMzkuMTUtLjYyLjItLjg0LS4zNS40NC0uMTcuNTMtLjIuODMiLz4gPC9zdmc+",
        classicLogo: "debian",
        style: StyleType.flat,
        logoType: LogoType.custom,
        resultType: ResultType.url,
        labels: ["debian", "expert"],
        url: "https://img.shields.io/badge/debian-expert-A81D33.svg?&labelColor=101010&logo=data:image/svg%2bxml;base64,PHN2ZyByb2xlPSJpbWciIHZpZXdCb3g9IjAgMCAyNCAyNCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4gPHRpdGxlPkRlYmlhbjwvdGl0bGU+IDxwYXRoIGZpbGw9IiNBODFEMzMiIGQ9Ik0xMy44OCAxMi42ODVjLS40IDAgLjA4LjIuNjAxLjI4LjE0LS4xLjI3LS4yMi4zOS0uMzNhMy4wMDEgMy4wMDEgMCAwMS0uOTkuMDVtMi4xNC0uNTNjLjIzLS4zMy40LS42OS40Ny0xLjA2LS4wNi4yNy0uMi41LS4zMy43My0uNzUuNDctLjA3LS4yNyAwLS41Ni0uOCAxLjAxLS4xMS42LS4xNC44OW0uNzgxLTIuMDVjLjA1LS43MjEtLjE0LS41MDEtLjItLjIyMS4wNy4wNC4xMy41LjIuMjJNMTIuMzguMzFjLjIuMDQuNDUuMDcuNDIuMTIuMjMtLjA1LjI4LS4xLS40My0uMTJtLjQzLjEybC0uMTUuMDMuMTQtLjAxVi40M202LjYzMyA5Ljk0NGMuMDIuNjQtLjIuOTUtLjM4IDEuNWwtLjM1LjE4MWMtLjI4LjU0LjAzLjM1LS4xNy43OC0uNDQuMzktMS4zNCAxLjIyLTEuNjIgMS4zMDEtLjIwMSAwIC4xNC0uMjUuMTktLjM0LS41OTEuNC0uNDgxLjYtMS4zNzEuODVsLS4wMy0uMDZjLTIuMjIxIDEuMDQtNS4zMDMtMS4wMi01LjI1My0zLjg0Mi0uMDMuMTctLjA3LjEzLS4xMi4yYTMuNTUxIDMuNTUyIDAgMDEyLjAwMS0zLjUwMSAzLjM2MSAzLjM2MiAwIDAxMy43MzIuNDggMy4zNDEgMy4zNDIgMCAwMC0yLjcyMS0xLjNjLTEuMTguMDEtMi4yODEuNzYtMi42NTEgMS41Ny0uNi4zOC0uNjcgMS40Ny0uOTMgMS42NjEtLjM2MSAyLjYwMS42NiAzLjcyMiAyLjM4IDUuMDQyLjI3LjE5LjA4LjIxLjEyLjM1YTQuNzAyIDQuNzAyIDAgMDEtMS41My0xLjE2Yy4yMy4zMy40Ny42Ni44LjkxLS41NS0uMTgtMS4yNy0xLjMtMS40OC0xLjM1LjkzIDEuNjYgMy43OCAyLjkyMSA1LjI2MSAyLjNhNi4yMDMgNi4yMDMgMCAwMS0yLjMzLS4yOGMtLjMzLS4xNi0uNzctLjUxLS43LS41N2E1LjgwMiA1LjgwMyAwIDAwNS45MDItLjg0Yy40NC0uMzUuOTMtLjk0IDEuMDctLjk1LS4yLjMyLjA0LjE2LS4xMi40NC40NC0uNzItLjItLjMuNDYtMS4yNGwuMjQuMzNjLS4wOS0uNi43NC0xLjMyMS42Ni0yLjI2Mi4xOS0uMy4yLjMgMCAuOTcuMjktLjc0LjA4LS44NS4xNS0xLjQ2LjA4LjIuMTguNDIuMjMuNjMtLjE4LS43LjItMS4yLjI4LTEuNi0uMDktLjA1LS4yOC4zLS4zMi0uNTMgMC0uMzcuMS0uMi4xNC0uMjgtLjA4LS4wNS0uMjYtLjMyLS4zOC0uODYxLjA4LS4xMy4yMi4zMy4zNC4zNC0uMDgtLjQyLS4yLS43NS0uMi0xLjA4LS4zNC0uNjgtLjEyLjEtLjQtLjMtLjM0LTEuMDkxLjMtLjI1LjM0LS43NC41NC43Ny44NCAxLjk2Ljk4MSAyLjQ2LS4xLS42LS4yOC0xLjItLjQ5LTEuNzYuMTYuMDctLjI2LTEuMjQxLjIxLS4zN0E3LjgyMyA3LjgyNCAwIDAwMTcuNzAyIDEuNmMuMTguMTcuNDIuMzkuMzMuNDItLjc1LS40NS0uNjItLjQ4LS43My0uNjctLjYxLS4yNS0uNjUuMDItMS4wNiAwQzE1LjA4Mi43MyAxNC44NjIuOCAxMy44LjRsLjA1LjIzYy0uNzctLjI1LS45LjEtMS43MyAwLS4wNS0uMDQuMjctLjE0LjUzLS4xOC0uNzQxLjEtLjcwMS0uMTQtMS40MzEuMDMuMTctLjEzLjM2LS4yMS41NS0uMzItLjYuMDQtMS40NC4zNS0xLjE4LjA3QzkuNi42OCA3Ljg0NyAxLjMgNi44NjcgMi4yMkw2LjgzOCAyYy0uNDUuNTQtMS45NiAxLjYxMS0yLjA4IDIuMzExbC0uMTMxLjAzYy0uMjMuNC0uMzguODUtLjU3IDEuMjYxLS4zLjUyLS40NS4yLS40LjI4LS42IDEuMjItLjkgMi4yNTEtMS4xNiAzLjEwMi4xOC4yNyAwIDEuNjUuMDcgMi43Ni0uMyA1LjQ2MyAzLjg0IDEwLjc3NiA4LjM2MyAxMi4wMDYuNjcuMjMgMS42NS4yMyAyLjQ5LjI1LS45OS0uMjgtMS4xMi0uMTUtMi4wOC0uNDktLjctLjMyLS44NS0uNy0xLjM0LTEuMTNsLjIuMzVjLS45NzEtLjM0LS41Ny0uNDItMS4zNjEtLjY3bC4yMS0uMjdjLS4zMS0uMDMtLjgzLS41My0uOTctLjgxbC0uMzQuMDFjLS40MS0uNTAxLS42My0uODcxLS42MS0xLjE2MWwtLjExMS4yYy0uMTMtLjIxLTEuNTItMS45MDEtLjgtMS41MTEtLjEzLS4xMi0uMzEtLjItLjUtLjU1bC4xNC0uMTdjLS4zNS0uNDQtLjY0LTEuMDItLjYyLTEuMi4yLjI0LjMyLjMuNDUuMzMtLjg4LTIuMTcyLS45My0uMTItMS42MDEtMi4yMDJsLjE1LS4wMmMtLjEtLjE2LS4xOC0uMzQtLjI2LS41MWwuMDYtLjZjLS42My0uNzQtLjE4LTMuMTAyLS4wOS00LjQwMi4wNy0uNTQuNTMtMS4xLjg4LTEuOTgxbC0uMjEtLjA0Yy40LS43MSAyLjM0MS0yLjg3MiAzLjI0MS0yLjc2MS40My0uNTUtLjA5IDAtLjE4LS4xNC45Ni0uOTkxIDEuMjYtLjcgMS45MDEtLjg4LjctLjQwMS0uNi4xNi0uMjctLjE1MSAxLjItLjMuODUtLjcgMi40MjEtLjg1LjE2LjEtLjM5LjE0LS41Mi4yNiAxLS40OSAzLjE1MS0uMzcgNC41NjIuMjcgMS42My43NyAzLjQ2MSAzLjAxMSAzLjUzMSA1LjEzMmwuMDguMDJjLS4wNC44NS4xMyAxLjgyMS0uMTcgMi43MTFsLjItLjQyTTkuNTQgMTMuMjM2bC0uMDUuMjhjLjI2LjM1LjQ3LjczLjggMS4wMS0uMjQtLjQ3LS40Mi0uNjYtLjc1LTEuM20uNjItLjAyYy0uMTQtLjE1LS4yMi0uMzQtLjMxLS41Mi4wOC4zMi4yNi42LjQzLjg4bC0uMTItLjM2bTEwLjk0NS0yLjM4MmwtLjA3LjE1Yy0uMS43Ni0uMzQgMS41MTEtLjY5IDIuMjEyLjQtLjczLjY1LTEuNTQxLjc1LTIuMzYyTTEyLjQ1LjEyYy4yNy0uMS42Ni0uMDUuOTUtLjEyLS4zNy4wMy0uNzQuMDUtMS4xLjFsLjE1LjAyTTMuMDA2IDUuMTQyYy4wNy41Ny0uNDMuOC4xMS40Mi4zLS42Ni0uMTEtLjE4LS4xLS40Mm0tLjY0IDIuNjYxYy4xMi0uMzkuMTUtLjYyLjItLjg0LS4zNS40NC0uMTcuNTMtLjIuODMiLz4gPC9zdmc+",
        result: "https://img.shields.io/badge/debian-expert-A81D33.svg?&labelColor=101010&logo=data:image/svg%2bxml;base64,PHN2ZyByb2xlPSJpbWciIHZpZXdCb3g9IjAgMCAyNCAyNCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4gPHRpdGxlPkRlYmlhbjwvdGl0bGU+IDxwYXRoIGZpbGw9IiNBODFEMzMiIGQ9Ik0xMy44OCAxMi42ODVjLS40IDAgLjA4LjIuNjAxLjI4LjE0LS4xLjI3LS4yMi4zOS0uMzNhMy4wMDEgMy4wMDEgMCAwMS0uOTkuMDVtMi4xNC0uNTNjLjIzLS4zMy40LS42OS40Ny0xLjA2LS4wNi4yNy0uMi41LS4zMy43My0uNzUuNDctLjA3LS4yNyAwLS41Ni0uOCAxLjAxLS4xMS42LS4xNC44OW0uNzgxLTIuMDVjLjA1LS43MjEtLjE0LS41MDEtLjItLjIyMS4wNy4wNC4xMy41LjIuMjJNMTIuMzguMzFjLjIuMDQuNDUuMDcuNDIuMTIuMjMtLjA1LjI4LS4xLS40My0uMTJtLjQzLjEybC0uMTUuMDMuMTQtLjAxVi40M202LjYzMyA5Ljk0NGMuMDIuNjQtLjIuOTUtLjM4IDEuNWwtLjM1LjE4MWMtLjI4LjU0LjAzLjM1LS4xNy43OC0uNDQuMzktMS4zNCAxLjIyLTEuNjIgMS4zMDEtLjIwMSAwIC4xNC0uMjUuMTktLjM0LS41OTEuNC0uNDgxLjYtMS4zNzEuODVsLS4wMy0uMDZjLTIuMjIxIDEuMDQtNS4zMDMtMS4wMi01LjI1My0zLjg0Mi0uMDMuMTctLjA3LjEzLS4xMi4yYTMuNTUxIDMuNTUyIDAgMDEyLjAwMS0zLjUwMSAzLjM2MSAzLjM2MiAwIDAxMy43MzIuNDggMy4zNDEgMy4zNDIgMCAwMC0yLjcyMS0xLjNjLTEuMTguMDEtMi4yODEuNzYtMi42NTEgMS41Ny0uNi4zOC0uNjcgMS40Ny0uOTMgMS42NjEtLjM2MSAyLjYwMS42NiAzLjcyMiAyLjM4IDUuMDQyLjI3LjE5LjA4LjIxLjEyLjM1YTQuNzAyIDQuNzAyIDAgMDEtMS41My0xLjE2Yy4yMy4zMy40Ny42Ni44LjkxLS41NS0uMTgtMS4yNy0xLjMtMS40OC0xLjM1LjkzIDEuNjYgMy43OCAyLjkyMSA1LjI2MSAyLjNhNi4yMDMgNi4yMDMgMCAwMS0yLjMzLS4yOGMtLjMzLS4xNi0uNzctLjUxLS43LS41N2E1LjgwMiA1LjgwMyAwIDAwNS45MDItLjg0Yy40NC0uMzUuOTMtLjk0IDEuMDctLjk1LS4yLjMyLjA0LjE2LS4xMi40NC40NC0uNzItLjItLjMuNDYtMS4yNGwuMjQuMzNjLS4wOS0uNi43NC0xLjMyMS42Ni0yLjI2Mi4xOS0uMy4yLjMgMCAuOTcuMjktLjc0LjA4LS44NS4xNS0xLjQ2LjA4LjIuMTguNDIuMjMuNjMtLjE4LS43LjItMS4yLjI4LTEuNi0uMDktLjA1LS4yOC4zLS4zMi0uNTMgMC0uMzcuMS0uMi4xNC0uMjgtLjA4LS4wNS0uMjYtLjMyLS4zOC0uODYxLjA4LS4xMy4yMi4zMy4zNC4zNC0uMDgtLjQyLS4yLS43NS0uMi0xLjA4LS4zNC0uNjgtLjEyLjEtLjQtLjMtLjM0LTEuMDkxLjMtLjI1LjM0LS43NC41NC43Ny44NCAxLjk2Ljk4MSAyLjQ2LS4xLS42LS4yOC0xLjItLjQ5LTEuNzYuMTYuMDctLjI2LTEuMjQxLjIxLS4zN0E3LjgyMyA3LjgyNCAwIDAwMTcuNzAyIDEuNmMuMTguMTcuNDIuMzkuMzMuNDItLjc1LS40NS0uNjItLjQ4LS43My0uNjctLjYxLS4yNS0uNjUuMDItMS4wNiAwQzE1LjA4Mi43MyAxNC44NjIuOCAxMy44LjRsLjA1LjIzYy0uNzctLjI1LS45LjEtMS43MyAwLS4wNS0uMDQuMjctLjE0LjUzLS4xOC0uNzQxLjEtLjcwMS0uMTQtMS40MzEuMDMuMTctLjEzLjM2LS4yMS41NS0uMzItLjYuMDQtMS40NC4zNS0xLjE4LjA3QzkuNi42OCA3Ljg0NyAxLjMgNi44NjcgMi4yMkw2LjgzOCAyYy0uNDUuNTQtMS45NiAxLjYxMS0yLjA4IDIuMzExbC0uMTMxLjAzYy0uMjMuNC0uMzguODUtLjU3IDEuMjYxLS4zLjUyLS40NS4yLS40LjI4LS42IDEuMjItLjkgMi4yNTEtMS4xNiAzLjEwMi4xOC4yNyAwIDEuNjUuMDcgMi43Ni0uMyA1LjQ2MyAzLjg0IDEwLjc3NiA4LjM2MyAxMi4wMDYuNjcuMjMgMS42NS4yMyAyLjQ5LjI1LS45OS0uMjgtMS4xMi0uMTUtMi4wOC0uNDktLjctLjMyLS44NS0uNy0xLjM0LTEuMTNsLjIuMzVjLS45NzEtLjM0LS41Ny0uNDItMS4zNjEtLjY3bC4yMS0uMjdjLS4zMS0uMDMtLjgzLS41My0uOTctLjgxbC0uMzQuMDFjLS40MS0uNTAxLS42My0uODcxLS42MS0xLjE2MWwtLjExMS4yYy0uMTMtLjIxLTEuNTItMS45MDEtLjgtMS41MTEtLjEzLS4xMi0uMzEtLjItLjUtLjU1bC4xNC0uMTdjLS4zNS0uNDQtLjY0LTEuMDItLjYyLTEuMi4yLjI0LjMyLjMuNDUuMzMtLjg4LTIuMTcyLS45My0uMTItMS42MDEtMi4yMDJsLjE1LS4wMmMtLjEtLjE2LS4xOC0uMzQtLjI2LS41MWwuMDYtLjZjLS42My0uNzQtLjE4LTMuMTAyLS4wOS00LjQwMi4wNy0uNTQuNTMtMS4xLjg4LTEuOTgxbC0uMjEtLjA0Yy40LS43MSAyLjM0MS0yLjg3MiAzLjI0MS0yLjc2MS40My0uNTUtLjA5IDAtLjE4LS4xNC45Ni0uOTkxIDEuMjYtLjcgMS45MDEtLjg4LjctLjQwMS0uNi4xNi0uMjctLjE1MSAxLjItLjMuODUtLjcgMi40MjEtLjg1LjE2LjEtLjM5LjE0LS41Mi4yNiAxLS40OSAzLjE1MS0uMzcgNC41NjIuMjcgMS42My43NyAzLjQ2MSAzLjAxMSAzLjUzMSA1LjEzMmwuMDguMDJjLS4wNC44NS4xMyAxLjgyMS0uMTcgMi43MTFsLjItLjQyTTkuNTQgMTMuMjM2bC0uMDUuMjhjLjI2LjM1LjQ3LjczLjggMS4wMS0uMjQtLjQ3LS40Mi0uNjYtLjc1LTEuM20uNjItLjAyYy0uMTQtLjE1LS4yMi0uMzQtLjMxLS41Mi4wOC4zMi4yNi42LjQzLjg4bC0uMTItLjM2bTEwLjk0NS0yLjM4MmwtLjA3LjE1Yy0uMS43Ni0uMzQgMS41MTEtLjY5IDIuMjEyLjQtLjczLjY1LTEuNTQxLjc1LTIuMzYyTTEyLjQ1LjEyYy4yNy0uMS42Ni0uMDUuOTUtLjEyLS4zNy4wMy0uNzQuMDUtMS4xLjFsLjE1LjAyTTMuMDA2IDUuMTQyYy4wNy41Ny0uNDMuOC4xMS40Mi4zLS42Ni0uMTEtLjE4LS4xLS40Mm0tLjY0IDIuNjYxYy4xMi0uMzkuMTUtLjYyLjItLjg0LS4zNS40NC0uMTcuNTMtLjIuODMiLz4gPC9zdmc+",
    };

    // constructor(params: Partial<IBadge> = {}) {
    constructor() {
        const config = { ...BadgeClass.DEFAULT_VALUES};
        this.validateConfig(config);

        this.rightPartBGColor = config.rightPartBGColor;
        this.leftPartBGColor = config.leftPartBGColor;
        this.logoFGColor = config.logoFGColor;
        this.labelsNumber = config.labelsNumber;
        this.classicLogo = config.classicLogo;
        this.labels = config.labels;
        this.style = config.style;
        this.logoType = config.logoType;
        this.b64Logo = config.b64Logo;
        this.resultType = config.resultType;
        this.updateUrl();
    }

    private validateConfig(config: IBadge): void {
        if (config.labelsNumber < 0 || 2 < config.labelsNumber) {
            throw new Error("Labels number must between 0 and 2");
        }
        [config.rightPartBGColor, config.leftPartBGColor, config.logoFGColor].forEach((value) => {
            if (!value.matchHexColor()) {
                throw new Error(`Invalid color format : ${value}`);
            }
        })
    }

    public updateConfig(params: Partial<IBadge>): void {
        const newConfig = { ...this, ...params };
        // this.validateConfig(newConfig);
        // Object.assign(this, newConfig);
        this.updateUrl();
    }

    private updateUrl() {
        const stylePart: string = "style=" + this.style;
        const logoBGColorPart: string = "&labelColor=" + this.leftPartBGColor;
        const logoColorPart: string = "&logoColor=" + this.logoFGColor;
        const logoPart: string = this.getUrlLogoPart();
        let text: string = "";
        if (this.labelsNumber > 0) {text += this.labels.slice(0, this.labelsNumber).join('-')}
        const baseUrl: string = "https://img.shields.io/badge/";
        this.url = `${baseUrl}${text}-${this.rightPartBGColor}.svg?${stylePart}${logoBGColorPart}${logoColorPart}${logoPart}`
    }

    private getUrlLogoPart(): string {
        let logoPart: string = "&logo=";
        switch(this.logoType) {
            case LogoType.normal:
                logoPart += this.classicLogo;
                break;
            case LogoType.custom:
                const b64Prefix: string = "data:image/svg%2bxml;base64,";
                logoPart += b64Prefix + this.b64Logo ;
                break;
            case LogoType.none:
                logoPart = "";
                break;
        }
        return logoPart;
    }

    getResult(): string {
        this.updateUrl();
        switch (this.resultType) {
            case ResultType.url:
                return this.url
            case ResultType.markdown:
                return `![Static Badge](${this.url})`;
            case ResultType.rSt:
                return `image:: ${this.url}\n:alt: Static Badge\nCommunity`;
            case ResultType.AsciiDoc:
                return `image:${this.url}[Static Badge]`;
            case ResultType.HTML:
                return `<img src=${this.url} alt={labels.join(" ")} />`;
        }
    }

    result: string;
}

// export d