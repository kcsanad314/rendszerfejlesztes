using Microsoft.EntityFrameworkCore.Migrations;

namespace Netpincer_App_Beadando.Migrations
{
    public partial class foodupdate : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_Food_FoodCategory_FoodId",
                table: "Food");

            migrationBuilder.DropIndex(
                name: "IX_Food_FoodId",
                table: "Food");

            migrationBuilder.RenameColumn(
                name: "FoodId",
                table: "Food",
                newName: "PreparationTime");

            migrationBuilder.AlterColumn<double>(
                name: "Price",
                table: "Food",
                type: "float",
                nullable: false,
                oldClrType: typeof(int),
                oldType: "int");

            migrationBuilder.AddColumn<double>(
                name: "DiscountMultiplier",
                table: "Food",
                type: "float",
                nullable: false,
                defaultValue: 0.0);

            migrationBuilder.AddColumn<int>(
                name: "FoodCategoryId",
                table: "Food",
                type: "int",
                nullable: false,
                defaultValue: 0);

            migrationBuilder.CreateIndex(
                name: "IX_Food_FoodCategoryId",
                table: "Food",
                column: "FoodCategoryId");

            migrationBuilder.AddForeignKey(
                name: "FK_Food_FoodCategory_FoodCategoryId",
                table: "Food",
                column: "FoodCategoryId",
                principalTable: "FoodCategory",
                principalColumn: "Id",
                onDelete: ReferentialAction.Cascade);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_Food_FoodCategory_FoodCategoryId",
                table: "Food");

            migrationBuilder.DropIndex(
                name: "IX_Food_FoodCategoryId",
                table: "Food");

            migrationBuilder.DropColumn(
                name: "DiscountMultiplier",
                table: "Food");

            migrationBuilder.DropColumn(
                name: "FoodCategoryId",
                table: "Food");

            migrationBuilder.RenameColumn(
                name: "PreparationTime",
                table: "Food",
                newName: "FoodId");

            migrationBuilder.AlterColumn<int>(
                name: "Price",
                table: "Food",
                type: "int",
                nullable: false,
                oldClrType: typeof(double),
                oldType: "float");

            migrationBuilder.CreateIndex(
                name: "IX_Food_FoodId",
                table: "Food",
                column: "FoodId");

            migrationBuilder.AddForeignKey(
                name: "FK_Food_FoodCategory_FoodId",
                table: "Food",
                column: "FoodId",
                principalTable: "FoodCategory",
                principalColumn: "Id",
                onDelete: ReferentialAction.Cascade);
        }
    }
}
